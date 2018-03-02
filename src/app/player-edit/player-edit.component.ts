import { ActivatedRoute } from '@angular/router';
import { PlayerService } from './../shared/services/player.service';
import { Player } from './../shared/models/player.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'kickit-player-edit',
    templateUrl: './player-edit.component.html',
    styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnChanges, OnInit {
    public player: Player;
    public playerForm: FormGroup;
    public genders: string[] = [
        'männlich',
        'weiblich'
    ];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private playerService: PlayerService
    ) {
        this.playerForm = this.formBuilder.group(
            {
                firstname: ['', [Validators.required, Validators.minLength(2)]],
                lastname: ['', [Validators.required, Validators.minLength(2)]],
                gender: ['', [Validators.required]],
            }
        );
    }

    public ngOnInit() {
        this.getPlayer();
    }

    private getPlayer() {
        this.playerService.getPlayer(this.route.snapshot.paramMap.get('playerId'))
            .subscribe(player => {
                this.player = player;
            });
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.player) {
            this.revert();
        }
    }

    public onSubmit() {
        this.playerService.savePlayer({
            Id: this.player.Id,
            Nickname: this.player.Nickname,
            FirstName: this.playerForm.value.firstname as string,
            LastName: this.playerForm.value.lastname as string,
            Gender: this.playerForm.value.gender
        }).subscribe(() => {
            this.revert();
        });
    }

    public revert() {
        this.playerForm.reset({
            firstname: this.player.FirstName,
            lastname: this.player.LastName,
            gender: this.player.Gender,
        });
    }
}
