export const options = {
  timeout: 1000 * 60,
  headers: {
    "content-type": "application/json",
  },
};

// // Administrative Topic Actions
export const AdminTopicEventType = {
  DeleteTopic: 1000,
  CreateTopic: 1001, // m.room.create
  PrivacySet: 1002,
  BanMember: 1003,
  UnbanMember: 1004,
  ContractSet: 1005,
  UpdateName: 1006, //  m.room.name
  UpdateDescription: 1007, //  m.room.topic
  UpdateAvatar: 1008, //  m.room.avatar
  PinMessage: 1008, //  m.room.avatar
  UpdateTopic: 1009, // m.room.create
  UpgradeSubscriberEvent: 1010,
};

// Member Topic Actions
export const MemberTopicEventType = {
  LeaveEvent: 1100,
  JoinEvent: 1101,
  RequestedEvent: 1102,
  ApprovedEvent: 1103,
  UpgradedEvent: 1104,
  InvitedEvent: 1105,
};

// // Message Actions
export const MemberMessageEventType = {
  "DeleteMessageEvent ": 1200, //m.room.encrypted
  SendMessageEvent: 1201, // m.room.message
  // CreateReaction          EventType = 1202 // m.reaction
  // IsTyping                EventType = 1203
};
