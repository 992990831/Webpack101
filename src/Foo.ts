import { User } from './IFoo';

export const sum
    = (...a: number[]) =>
      a.reduce((acc, val) => acc + val, 0);

class Foo {
    Say(user: User){
        return `hello ${user.name}!`;
    }

    async AsyncSay(user: User) : Promise<string> {
        const response = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
              try {
                resolve(`hello ${user.name}!`);
              } catch {
                reject();
              }
            }, 1000);
        });
      
        return response;
    }
}

function component() {
    const foo = new Foo();
    
    const element = document.createElement('div');

    let user:User = { name:'Maggie', age:20 }
    element.innerHTML = foo.Say(user);

    foo.AsyncSay(user);

    return element;
  }

  document.body.appendChild(component());
