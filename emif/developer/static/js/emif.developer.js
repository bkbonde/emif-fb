/*
# -*- coding: utf-8 -*-
# Copyright (C) 2014 Universidade de Aveiro, DETI/IEETA, Bioinformatics Group - http://bioinformatics.ua.pt/
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

$(function(){
    $('.remove_plugin').click(function(){
        var tr   = $(this).parent().parent();
        var id   = tr.data('id');
        var name = tr.data('name');
        bootbox.confirm('Are you sure you want to delete "'+name+'" ?',function(result){
            console.log('result');
            console.log(result);
            if(result){
                $('#utility_form > .utility_content').html('<input type="hidden" name="slug" value="'+id+'" />');
                $('#utility_submit').click();
            }

        });
    });

    $('#plugins').dataTable({
        "oLanguage": {
            "sEmptyTable": "No plugins found"
        },
        "aoColumnDefs" : [
            {
                'bSortable' : false,
                'aTargets' : [4]
            }
        ],
        "order": [[ 3, "desc" ]]
    });
});
