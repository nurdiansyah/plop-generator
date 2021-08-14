const marketplaceExampleCards = {
  cards: [
    {
      logo: 'https://pbs.twimg.com/profile_images/953742622434017281/HRiQQRw2_400x400.jpg',
      title: 'AppDynamics',
      subtitle: 'Cisco',
      description:
        'AIOps Cloud Monitoring provides the insights needed for application workload health.',
      type: 'Monitoring & Performance',
      url: 'https://www.appdynamics.com/',
    },
    {
      logo:
        'https://www.cisco.com/c/en/us/products/security/stealthwatch-cloud/index/_jcr_content/Grid/category_atl_1116/layout-category-atl/blade_467251256/bladeContents3/tile.img.png/1591915702496.png',
      title: 'Stealthwatch',
      subtitle: 'Cisco',
      description: 'Pervasive network visibility and sophisticated security analytics for ...',
      type: 'Networking & Security',
      url: 'https://www.cisco.com/c/en/us/products/security/stealthwatch/index.html',
    },
    {
      logo:
        'data:image/png;base64,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',
      title: 'Tetration',
      subtitle: 'Cisco',
      description: 'Secure your workload anywhere, automate micro-segmentation, simplify...',
      type: 'Networking & Security',
      url: 'https://www.cisco.com/c/en/us/products/security/tetration/index.html',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/LNVTA-IDj8YdyBxixCnHU-jPFyL1crWdc6ludh1iuF32Yl2zQ15CpTu7PKw4GzMRyHBDrKyUCSkfa_vsIves',
      title: 'MongoDB',
      subtitle: 'MongoDB Inc.',
      description: 'Set up, scale and operate MongoDB with just a few clicks',
      type: 'APIs & services',
      url: 'https://www.mongodb.com/',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/qA3Wi_vVn7r_s1fQfr0gOl8ajXeRmQp57ObLxij1-4SFhuAqnR_hInNLK5TlmWFYYMd8EBnsdjjNk6ah-20=w80-h40',
      title: 'MySQL',
      subtitle: 'Cloud Infrastructure Services',
      description: 'Deploy MySQL Community Edition on Windows Server 2019',
      type: 'Virtual Machines',
      url: 'https://www.mysql.com/',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/g5k4Jd3UAuxDcdoDNHaska2CItmYL726GyOa3TyJQQzvvJ2GYAL6isVXS7mCsawpl5lpijAK7IM0ykfPzfX5=w80-h40',
      title: 'SQL Server Enterprise',
      subtitle: 'Cognosys Inc.',
      description: 'Hardened SQL Server Enterprise on SUSE Enterprise',
      type: 'Virtual Machines',
      url: 'https://console.cloud.google.com/marketplace/partners/cognosys-public',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/iA3UKmlTbTrMpYlfMZErEj8CSBCVu99g1q0-WB_GG_Eb4yWRRI27kEc7vzoV2zoLaxtpk6SH0nDBe2DTYtMA=w80-h80',
      title: 'RabbitMQ Cluster',
      subtitle: 'RabbitMQ Cluster',
      description: 'A robust AMQP-compliant messaging system',
      type: 'Kubernetes apps',
      url: 'https://www.rabbitmq.com/',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/f3Q7DhmtRoUT0cxj4QN6DmTw6j6H3F43XYGk1aQtRRvmYSyfmuviiAoSRBNLuTdkAGjAXJdvIc2ujNQsw54H3Q=w80-h80',
      title: 'Apache Kafka',
      subtitle: 'Confluent',
      description: 'Apache Kafka Re-Engineered for the Cloud',
      type: 'APIs & services',
      url: 'https://console.cloud.google.com/marketplace/partners/p1c-239520',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/HfcMbL7iI1QBzq1v1tMuae2szZcf18yxWaTs7AgDNsJ25JN2_tyAtvb4U77ocapKzydVRE_d1mY=w80-h80',
      title: 'TensorFlow',
      subtitle: 'Techlatest.net',
      description: 'Out of box setup for developing & deploying Tensorflow apps',
      type: 'Virtual Machines',
      url:
        'https://console.cloud.google.com/marketplace/partners/techlatest-public?project=hubspot-prospects',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/sM8lMEG0MiSRfehXa3WiL7MgxZm0JT0khoS1tbkIKJqD9g8CUvQxNDugip9_3ZIhBzevNk8u6fQ=w80-h80',
      title: 'F5 BIG-IP Virtual Edition',
      subtitle: 'F5 Networks',
      description: 'Load Balancing, GSLB, Network Firewall, DNS and WAF',
      type: 'Virtual Machines',
      url: 'https://www.f5.com/',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/7wJ7IH3q_CI2LcRsRJwuZP0P-FVzrKBzQ45g6z0xCI3vvxHAast30SM9oPcmikb5ET_04RlaSQ=w80-h80',
      title: 'Elasticsearch 7',
      subtitle: 'Elasticsearch',
      description: 'Distributed real time search and analytics',
      type: 'Container images',
      url: 'https://www.mongodb.com/',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/L2erUW312VilygiISYeZUF_yfgW_fqxrcR9Dt1b-7_BVr_ybgd6iSEU6CEpEWplOYe1TyTnvYow=w80-h80',
      title: 'Windows IIS Server',
      subtitle: 'Cognosys Inc.',
      description: 'Hardened IIS Microsoft on Windows 2012 R2',
      type: 'Virtual Machines',
      url: 'https://console.cloud.google.com/marketplace/partners/cognosys-public',
    },
    {
      logo:
        'https://lh3.googleusercontent.com/UCTWRSXIyCGFksUJSUerVTOAe51TDqK50c5M4mH-9ZJFi9MzbnE4U5EWEzU0PDMyYmlto2Qn8g=w80-h80',
      title: 'Java Tomcat Server',
      subtitle: 'Tomcat Click to Deploy',
      description: 'Open source Java Servlet container',
      type: 'Virtual Machines',
      url: 'https://cloud.google.com/?_ga=2.93590365.-1775850825.1583534488',
    },
  ],
};

export default marketplaceExampleCards;
