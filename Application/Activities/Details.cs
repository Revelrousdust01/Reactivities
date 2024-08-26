using System.Diagnostics;
using MediatR;
using Persistence;
using Activity = Domain.Activity;

namespace Application.Activities;

public class Details
{
    public class Query : IRequest<Activity>
    {
        public Guid Id { get; set; }
    }

    public class Handler(DataContext context) : IRequestHandler<Query, Activity>
    {
        private readonly DataContext _context = context;

        public async Task<Domain.Activity> Handle(Query request, CancellationToken cancellationToken)
            => await _context.Activities.FindAsync(request.Id);
    }
}