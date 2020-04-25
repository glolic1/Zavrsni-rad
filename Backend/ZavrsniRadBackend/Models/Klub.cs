﻿using System;
using System.Collections.Generic;

namespace ZavrsniRadBackend.Models
{
    public partial class Klub
    {
        public Klub()
        {
            Momcadi = new HashSet<Momcadi>();
        }

        public int Id { get; set; }
        public string Naziv { get; set; }
        public DateTime? GodinaOsnivanja { get; set; }
        public int? StadionId { get; set; }
        public int? SjedisteKlubaId { get; set; }

        public virtual Lokacija SjedisteKluba { get; set; }
        public virtual Stadioni Stadion { get; set; }
        public virtual ICollection<Momcadi> Momcadi { get; set; }
    }
}
