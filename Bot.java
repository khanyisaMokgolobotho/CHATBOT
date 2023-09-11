import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


public class Bot extends JFrame{
    private JTextArea Chatarea = new JTextArea();
    private JTextField chatbox = new JTextField();



public Bot() {
    JFrame frame = new JFrame();
    frame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    frame.setVisible(true);
    frame.setResizable(false);
    frame.setLayout(null);
    frame.setSize(600 ,600);
    frame.setTitle("SmooBot");
    frame.add(Chatarea);
    frame.add(chatbox);
    //FOR TEXTAREA
    Chatarea.setSize(500,400);
    Chatarea.setLocation(2,2);

    //FOR TEXTFIELD
    chatbox.setSize(500, 30);
    chatbox.setLocation(2,500);

    chatbox.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            String gtext = chatbox.getText().toLowerCase();
            Chatarea.append("YOU -> "  + gtext + "\n" );
            chatbox.setText("");

            if(gtext.contains("hi")){
                bot("Hi Im SmooBot, How may I help you?");
            }
            else {
                int rand = (int) (Math.random() * 3 +1);
                if bot ("I DONT UNDERSTAND YOU!!!");
            }
        }

});

}
    private void bot(String string) {
    Chatarea.append("BOT -> " +string+ "\n");
    }

    public static void main(String[]args){
      new Bot();

    }
}
