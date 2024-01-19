/*
 * Title: Notification Library
 * Description: Important functions related to SMS notification
 * Author: Mohammad Sefatullah
 * Date: 2024/01/05 15:33
 *
 */

// dependencies

// module scaffolding
const notify = {};

// send sms to user using mail api
notify.sendEmail = (email, msg, callback) => {
    callback(true);
};

// export module
module.exports = notify;
