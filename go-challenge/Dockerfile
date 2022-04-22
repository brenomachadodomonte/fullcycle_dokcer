FROM golang:1.18 as builder
WORKDIR /usr/src/app
COPY . .
RUN go build main.go

FROM scratch
COPY --from=builder /usr/src/app/ .
CMD ["./main"]

