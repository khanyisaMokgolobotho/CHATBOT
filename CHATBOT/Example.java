/*import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.net.URI;
import java.math.BigDecimal;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "AC6c02ed1e56f016d6cb49110c8af6b852";
    public static final String AUTH_TOKEN = "[AuthToken]";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Message message = Message.creator(
                        new com.twilio.type.PhoneNumber("whatsapp:+27671314882"),
                        new com.twilio.type.PhoneNumber("whatsapp:+14155238886"),
                        "Your message")
                .create();

        System.out.println(message.getSid());
    }
}
*/
