/**
  * @swagger
  * response:
  *   autoconf:
  *     description: Ok. With the authenticated user autoconfiguration file
  *     examples:
  *       application/json:
  *         {
  *           accounts: [
  *             {
  *               imap: {
  *                 prettyName: 'OpenPaaS (user@linagora.com)',
  *                 hostName: 'openpaas.linagora.com',
  *                 username: 'user@linagora.com',
  *                 port: '143',
  *                 socketType: '2'
  *               },
  *               smtp: {
  *                 description: 'OpenPaaS SMTP',
  *                 hostname: 'smtp.linagora.com',
  *                 username: 'user@linagora.com',
  *                 port: '587',
  *                 socketType: '2'
  *               },
  *               identities: [
  *                 {
  *                   identityName: 'Default (user@linagora.com)',
  *                   email: 'user@linagora.com',
  *                   fullName: 'User',
  *                   organization: 'Linagora',
  *                   autoQuote: true,
  *                   replyOnTop: '1',
  *                   sigBottom: false,
  *                   sigOnForward: true,
  *                   sigOnReply: true,
  *                   attachSignature: false,
  *                   htmlSigText: '<font style="color: red;">Hello !</font>',
  *                   htmlSigFormat: true,
  *                   fccFolder: '%serverURI%/Sent',
  *                   draftFolder: '%serverURI%/Drafts'
  *                 }
  *               ]
  *             }
  *           ],
  *           addons: [
  *             {
  *               id: '{e2fda1a4-762b-4020-b5ad-a41df1933103}',
  *               name: 'Lightning',
  *               versions: [
  *                 {
  *                   version: '4.7',
  *                   minAppVersion: '45',
  *                   platforms: [
  *                     {
  *                       platform: 'Linux',
  *                       url: 'https://addons.mozilla.org/thunderbird/downloads/file/430153/lightning-4.7-sm+tb-linux.xpi'
  *                     }
  *                   ]
  *                 }
  *               ]
  *             },
  *             {
  *               id: 'cardbook@vigneau.philippe',
  *               name: 'CardBook',
  *               versions: [
  *                 {
  *                   version: '16.7',
  *                   url: 'https://addons.mozilla.org/thunderbird/downloads/file/579999/cardbook-16.7-tb.xpi'
  *                 }
  *               ]
  *             }
  *           ],
  *           preferences: [
  *             {
  *               name: 'app.update.enabled',
  *               value: false,
  *               overwrite: true
  *             },
  *             {
  *               name: 'extensions.update.enabled',
  *               value: true,
  *               overwrite: true
  *             },
  *             {
  *               name: 'extensions.cardbook.firstOpen',
  *               value: false
  *             },
  *             {
  *               name: 'extensions.cardbook.exclusive',
  *               value: false
  *             },
  *             {
  *               name: 'extensions.cardbook.firstRun',
  *               value: false
  *             }
  *           ],
  *           calendars: [
  *             {
  *               name: 'OpenPaaS (User)',
  *               username: 'user@linagora.com',
  *               uri: 'calendarUri'
  *             }
  *           ],
  *           addressbooks: [
  *             {
  *               id: 'contacts',
  *               name: 'OP - Contacts',
  *               uri: 'bookUri',
  *               username: 'user@linagora.com',
  *               color: '#CCCCCC',
  *               readOnly: false
  *             }
  *           ],
  *           directories: [
  *             {
  *               dirName: 'OpenPaaS',
  *               uri: 'ldapUri',
  *               maxHits: 50
  *             }
  *           ]
  *         }
  */
