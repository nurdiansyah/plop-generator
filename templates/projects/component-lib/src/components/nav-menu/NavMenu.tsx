import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { navigate } from 'gatsby';
import React from 'react';

import { MenuItem as IMenuItem } from '../nav-drawer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
      maxWidth: '20px'
    },
    text: { fontSize: 1 }
  }),
);

interface MenuProps {
  label: string
  slug?: string
  url?: string
  isExternal?: boolean
  menuItems: {
    label: string
    url: string
    isExternal?: boolean
  }[]
}

export default (props: MenuProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = async (menu: IMenuItem) => {
    setOpen((prevOpen) => !prevOpen);
    if (!menu?.isExternal && menu?.url) return navigate(menu.url)
    if (menu?.isExternal && menu.url) window.open(menu.url, '_blank')
  };

  const handleClose = async(event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;
    setOpen(false);
    if (!props?.isExternal && props?.url) return navigate(props.url)
    if (props?.isExternal && props.url) window.open(props.url, '_blank')
  };

  async function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
    if (!props?.isExternal && props?.url) return navigate(props.url)
    if (props?.isExternal && props.url) window.open(props.url, '_blank')
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const getStyle = (placement: any) => ({ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' })
  const menuColor = {color: 'white'}
  const paperStyle = {maxWidth: '100%'}

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={() => handleToggle(props)}
          style={menuColor}
        >
          {props.label}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }: any) => (
            <Grow
              {...TransitionProps}
              style={getStyle(placement)}
            >
              <Paper style={paperStyle}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {props.menuItems?.map((menuItem, idx) => (
                      <MenuItem key={`${menuItem.label}-${idx}`} className={classes.text} onClick={() => handleToggle(menuItem)}>
                        <Typography variant="caption">{menuItem.label}</Typography>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
