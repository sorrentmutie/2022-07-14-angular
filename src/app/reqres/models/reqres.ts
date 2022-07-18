export interface ReqRes {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        Person[];
  support:     Support;
}

export interface Person {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}


export class ReqResPostRequest {
  constructor(public name: string, public job: string){}
}

export interface ReqResPostResponse {
  name: string,
  job: string,
  id: string,
  createdAt: string
}
