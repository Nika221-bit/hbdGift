import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hbdGift');

   cards = [
    { text: 'შენი ხელები ცივია,ჩემი კი ცეცხლივით იწვის,რა ბრმახარ ნასტენკა.', category: 'love'  },
    { text: 'რად გაჩნდა იგი?იქნებ იმიტომ რომ შენს სიახლოვეს ყოფილიყო,თუნდაც წამიერად.', category: 'love'  },
    { text: 'ბატონი ბრძანდებით ნასტენკა!ოცი წელი რო მყვარებოდით,ახლანდელზე ძლიერად მაინც არ მეყვარებოდით!', category: 'love'  },
    { text: 'ზოგის მადლიერი ხანდახან თუნდაც იმიტომ ვართ,რომ ჩვენ გვერდით არიან,მე კი იმითაც მადლიერი ვარ,რომ შემხვდით და მთელი ცხოვრება მემახსოვრებით...', category: 'love'  },
    { text: 'როცა გიყვარს,წყენა გულში აღარ გრჩება.', category: 'love'  },
    { text: 'რამდენჯერ გითქვამს აღარ გიყვარვარო. შენ გინდა, რომ მთელი ცხოვრება ჯვარის წერის პირველ დღეს ჰგავდეს. ასე არაა ძვირფასო. თუ დამიჯერებ, მე დღეს შენი ნაოჭები უფრო მიყვარს, ვიდრე შენი სახე ოცი წლის წინათ, მაგრამ ცხოვრება ისე გღლის, რომ ყოველთვისს აღტაცებულ მიჯნურად ვეღარ გამოიყურები კაცი... შენთან ყოფნა ბედნიერებაა, მაგრამ ძნელიც არის. შენ ხომ ყველა ადამიანს შესვამ ხოლმე სადღაც ზევით, უსაშველო სიმაღლეზე და არც კითხულობ არის თუ არა იქ მისი ადგილი', category: 'love'  },
    { text: 'სიყვარული არ არის ლაქა, რომელიც შეიძლება ჩამოირეცხო. ის არის სუნთქვა, რომლის გარეშეც ცხოვრება შეუძლებელია.', category: 'love'  },
    { text: 'მადლობა ღმერთს,რომ ამ ქვეყნად სიყვარული მოიგონა.', category: 'love'  },
    { text: 'სიყვარული ის არის,როდესაც შენ გიყვარს ის და სამაგიეროდ არაფერს არ მოელი მისგან.', category: 'love'  },

  
    { text: 'რა საშინელებაა მარტო,სრულიად მარტო დარჩენა,როცა წარსულში გულდასაწყვეტიც არაფერი გრჩება...იმიტომ,რომ რაც დავკარგე,მხოლოდ არარა,მხოლოდ სულელური ფუჭი ოცნება იყო!', category: 'sad'  },
    { text: 'როცა თვითონ ხარ უბედური,სხვის უბდეურებას მაშინ უფრო გრძნობ,მაშინ უფრო გულისხმიერი ხდები...', category: 'sad'  },
    { text: 'ზოგჯერ ადამიანს ისე ეშინია მარტოობის რომ პირველი თბილი სიტყვაც კი საკმარისია,სულით მისდევდეს მას,ვინც ეს სიტყვა უთხრა.და მაშინ,როცა გული პირველად გათბება,იფიქრებ,რომ შენთვისაც არსებობდეს ბედნიერება -თუნდაც წამიერად,თუნდაც მხოლოდ ერთ ღამეში.', category: 'sad'  },


    { text: 'ერთადერთი ადამიანი, ვისთანაც უნდა შეადარო თავი, არის შენი წარსული მე. და ერთადერთი, ვინც უკეთესი უნდა იყოს, არის ის, ვინც ახლა ხარ.', category: 'tired' },

    
    { text: 'Laughter is the best medicine.', category: 'humor' },
    { text: 'Don’t count your chickens before they hatch.', category: 'wisdom' },
    { text: 'Every cloud has a silver lining.', category: 'hope' }
  ];

  currentCard: string = '';

  showRandomCard(category: string) {
    const filtered = this.cards.filter(c => c.category === category);
    if (filtered.length > 0) {
      const randomIndex = Math.floor(Math.random() * filtered.length);
      this.currentCard = filtered[randomIndex].text;
    }
  }
}
