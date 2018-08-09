import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatChipsModule,
        MatTooltipModule,
        MatProgressBarModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatChipsModule,
        MatTooltipModule,
        MatProgressBarModule
    ]
})

export class MaterialModule {}
