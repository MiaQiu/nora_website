import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnectingToAgent, setIsConnectingToAgent] = useState(false);
  const [isHumanAgent, setIsHumanAgent] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Kai, your AskFellow AI assistant 👋",
      sender: "bot",
      timestamp: new Date()
    },
    {
      id: 2,
      text: "I'm here to help you find the right specialist for your family - whether it's learning challenges, behavioral support, or family guidance.",
      sender: "bot", 
      timestamp: new Date()
    },
    {
      id: 3,
      text: "Feel free to ask me anything: about our specialists, pricing, how our process works, or what to expect.",
      sender: "bot", 
      timestamp: new Date()
    },
    {
      id: 4,
      text: "What brings you here today?",
      sender: "bot", 
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage("");
      
      // Simulate bot response (only if not connected to human agent)
      if (!isHumanAgent) {
        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            text: "Thank you for sharing! Based on what you've told me, I'm connecting you with our specialists who can best support your family. Would you like to schedule a consultation?",
            sender: "bot",
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botResponse]);
        }, 1000);
      }
    }
  };

  const connectToHumanAgent = () => {
    setIsConnectingToAgent(true);
    
    // Show connecting message
    const connectingMessage = {
      id: messages.length + 1,
      text: "Connecting to our friendly agent...",
      sender: "system",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, connectingMessage]);
    
    // Simulate connection delay and then agent greeting
    setTimeout(() => {
      setIsConnectingToAgent(false);
      setIsHumanAgent(true);
      
      const agentGreeting = {
        id: messages.length + 2,
        text: "Hi! 👋 I'm Sarah from the AskFellow team. I'm here to personally help you find the perfect specialist for your family. What can I assist you with today?",
        sender: "agent",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentGreeting]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {isOpen && (
          <div className="mb-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
            {/* Header */}
            <div className="bg-primary text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm" data-testid="text-chat-title">
                    {isHumanAgent ? "Sarah - AskFellow Team" : "AskFellow Assistant"}
                  </h3>
                  <p className="text-xs opacity-90" data-testid="text-chat-status">
                    {isConnectingToAgent ? "Connecting..." : "Online • Ready to help"}
                  </p>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white hover:bg-primary-foreground hover:bg-opacity-20 p-1 rounded"
                data-testid="button-close-chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3" data-testid="chat-messages-container">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  data-testid={`message-${message.id}`}
                >
                  <div 
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === 'user' 
                        ? 'bg-secondary text-white' 
                        : message.sender === 'system'
                        ? 'bg-yellow-100 text-yellow-800 italic'
                        : message.sender === 'agent'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-charcoal'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  data-testid="input-chat-message"
                />
                <Button
                  onClick={sendMessage}
                  className="bg-secondary text-white hover:bg-secondary/90 px-3 py-2"
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Human Support Link */}
              {!isHumanAgent && (
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500">
                    Prefer human support?{" "}
                    <button 
                      className="text-secondary hover:text-secondary/80 underline"
                      data-testid="button-human-support"
                      onClick={connectToHumanAgent}
                      disabled={isConnectingToAgent}
                    >
                      Chat with our team
                    </button>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Floating Chat Button */}
        <button
          onClick={toggleChat}
          className="w-14 h-14 bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          data-testid="button-chat-toggle"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="fixed bottom-20 right-6 z-40">
          <div className="bg-primary text-white px-3 py-2 rounded-lg shadow-lg text-sm animate-bounce">
            <p data-testid="text-chat-notification">Need help finding the right specialist?</p>
          </div>
        </div>
      )}
    </>
  );
}