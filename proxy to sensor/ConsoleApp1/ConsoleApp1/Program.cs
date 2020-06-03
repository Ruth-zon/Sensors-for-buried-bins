using System;
using System.Collections.Generic;
using System.IO.Ports;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Solid.Arduino;
using Solid.Arduino.Firmata;

namespace ConsoleApp1
{
    class Program
    {
        private static readonly HttpClient client = new HttpClient();

        // Create the serial port with basic settings
        private SerialPort port = new SerialPort("COM4",
          9600, Parity.None, 8, StopBits.One);

        [STAThread]
        static void Main(string[] args)
        {
            // Instatiate this class
            new Program();
        }

        private Program()
        {
            Console.WriteLine("Incoming Data:");

            // Attach a method to be called when there
            // is data waiting in the port's buffer
            port.DataReceived += new
              SerialDataReceivedEventHandler(port_DataReceived);

            // Begin communications
            try
            {
                 port.Open();
            }
            catch (Exception)
            {
                Console.WriteLine("The sensor isn't connect" );
                return;
            }
           

            // Enter an application loop to keep this thread alive
            Console.ReadKey();
        }

        private void port_DataReceived(object sender,
          SerialDataReceivedEventArgs e)
        {
            var msg = port.ReadExisting();
            // Show all the incoming data in the port's buffer
            Console.WriteLine(msg);

            SendToServerAsync(msg);
        }

        private void SendToServerAsync(string Msg)
        {
            var response = client.PostAsync("http://localhost:10104/api/Measurement?sensorName=HC-SR04-THE-SENSOR&distance=" + Msg, null);
        }
    }
}
