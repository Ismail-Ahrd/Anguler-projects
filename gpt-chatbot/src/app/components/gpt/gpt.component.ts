import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent implements OnInit{
  queryFormGroup!: FormGroup;
  messages= [
    {role: "system", content: "You are a helpful assistant."}
  ];
  result: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.queryFormGroup = this.fb.group({
      query: this.fb.control("")
    })
  }

  handleAskGpt() {
    //console.log(this.queryFormGroup.value)
    let url: string = "https://api.openai.com/v1/chat/completions";
    let httpHeaders = new HttpHeaders()
      .set("Authorization", "Bearer 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");
    let payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    }

    this.messages.push({
      role: "user",
      content: this.queryFormGroup.value.query
    });

    this.http.post(url, payload, {headers: httpHeaders}).subscribe({
      next: data => {
        console.log(data);
        this.result = data;
        this.result.choices.forEach((choice: any) => {
          this.messages.push({
            role: "assistant",
            content: choice.message.content
          })
          console.log(this.messages)
        })
      }, error: err => {
        console.log(err);
      }
    });
  }
}
