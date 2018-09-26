package application;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class combobox extends JApplet{
	JLabel jlab;
	JComboBox jcb;
	String flags[]={"India","Pakistan","Bangladesh","SriLanka"};
	
	
	public void init(){
		try{
		SwingUtilities.invokeAndWait(new Runnable(){
			public void run(){
				makeGUI();
			}
		});
		}catch(Exception exc){
			System.out.println("Cant create because of "+ exc);
		}
	}
	private void makeGUI(){
		setLayout(new FlowLayout());
		jcb=new JComboBox(flags);
		add(jcb);
		jcb.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent ae){
				String s=(String) jcb.getSelectedItem();
				if(s=="India")
					jlab.setText("It is a good country");
				else if(s=="Pakistan")
					jlab.setText("Most populous country");
				else if(s=="Bangladesh")
					jlab.setText("It is the best");
				else
					jlab.setText("Great island");
			}
		});
		jlab=new JLabel("SELECT A COUNTRY FROM COMBOBOX");
		add(jlab);
	}
}