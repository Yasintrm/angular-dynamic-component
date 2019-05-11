FROM microsoft/dotnet:2.2-sdk as builder
WORKDIR /app
COPY app/ .
RUN cd /app && dotnet publish -c Release -o /app/

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-alpine
WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT ["dotnet", "alternatifbank.dll"]
