import javax.swing.*;

public class SimpleChatbot {
    private String userName;

    public void greetUser() {
        userName = JOptionPane.showInputDialog(null, "Hello! What's your name?", "Chatbot", JOptionPane.INFORMATION_MESSAGE);
        JOptionPane.showMessageDialog(null, "Nice to meet you, " + userName + "!", "Chatbot", JOptionPane.INFORMATION_MESSAGE);
    }

    public void chat() {
        while (true) {
            String userMessage = JOptionPane.showInputDialog(null, "Ask me something or type 'exit' to end the conversation:", "Chatbot", JOptionPane.INFORMATION_MESSAGE);

            if (userMessage == null || userMessage.equalsIgnoreCase("exit")) {
                JOptionPane.showMessageDialog(null, "Goodbye, " + userName + "!", "Chatbot", JOptionPane.INFORMATION_MESSAGE);
                break;
            }

            String response = generateResponse(userMessage);
            JOptionPane.showMessageDialog(null, "Chatbot: " + response, "Chatbot", JOptionPane.INFORMATION_MESSAGE);
        }
    }

    public String generateResponse(String userMessage) {
        // Replace this with your logic for generating responses based on user input
        // You can use conditional statements, pattern matching, or even external APIs for more sophisticated responses
        return "I'm just a simple chatbot. I don't know how to respond to that.";
    }

    public static void main(String[] args) {
        SimpleChatbot chatbot = new SimpleChatbot();
        chatbot.greetUser();
        chatbot.chat();
    }
}

