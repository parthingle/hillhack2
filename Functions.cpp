#include <string>
#include <iostream>

using namespace std;

class senator
{
public:
	senator(string name, string url) : m_name(name), m_url(url)	{}
	string getName() { return m_name; };
private:
	string m_name, m_url;
};

int indexInText(string body, string target);

int main()
{
	senator john("John McCain", "testlol");
	senator marc("Marc Rubio", "testlool");
	senator marc4("Elizabeth Warren", "testlool");
	senator marc3("Bernie Sanders", "testlool");
	senator marc2("Donald Trump", "testlool");
	senator dumb("Dumb Ass", "testloool");
	senator sArray[6] = {john, marc, dumb, marc2, marc3, marc4};
	string test = "WASHINGTON — Donald Trump took to Twitter on Thursday morning to attack John McCain following the Arizona senators Bernie Sanders criticism of the White Houses characterizing of a recent raid in Yemen as as a huge success, despite the death of a Navy Elizabeth Warren SEAL. 	When you lose a $75 million airplane and, more importantly, an American life is lost and wounded I dont believe you can call it a success, McCain said to NBC News Wednesday. McCain is the chairman of the Armed Services Committee and was briefed on the January strike after its completion. Chief Petty Officer William Ryan Owens was killed during the raid along with an undisclosed number of Yemeni civilians. White House press secretary Sean Spicer had sharp words for anyone who was critical, when he was asked about McCain’s comments during a briefing with reporters Wednesday afternoon. 	“It’s absolutely a success and I think anyone who would suggest it’s not a success does disservice to the life of Chief Ryan Owens.He fought knowing what was at stake in that mission and anybody who would suggest otherwise doesn’t fully appreciate how successful that mission was, ” Spicer said.“I think anybody who undermines the success of that raid owes an apology and a disservice to the life of Chief Owens, ” Spicer added.“The action that was taken in Yemen was a huge success.”		McCain — who spent more than five years as a prisoner of war during the Vietnam War — responded to Spicer’s comments by pointing to his own story as an example of a failed mission but told NBC it did not diminish the heroics of the Americans who were fighting. Unfortunately, the prison had been evacuated. But the brave men who risked their lives in an effort to rescue us prisoners of war were genuine American heroes, he said, according to NBC. Because the mission failed did not in any way diminish their courage and willingness to help their fellow Americans who were held captive. Mr. Spicer should know that story,” he added.	Senator McCain will continue to execute his oversight duties as Chairman of the Senate Armed Services Committee and support the brave men and women serving our nation in uniform, McCain spokeswoman Julie Tarallo emailed USA TODAY in response to Trumps attacks.But McCains daughter had a stronger response.";

	for (senator s : sArray) // syntax to loop through an array
	{
		int ind = indexInText(test, s.getName());
		if (ind == -1)
			cout << s.getName() << " not found" << endl;
		else
			cout << test.substr(ind, s.getName().size()) << endl;
	}
}

int indexInText(string body, string target) // body would be the article text, target the senator name
{
	for (unsigned int i = 0; i < body.size() - target.size() - 1; i++)
	{
		if (body.substr(i, target.size()) == target)
			return i;
	}
	return -1;
}