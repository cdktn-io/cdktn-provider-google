/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralGoogleServiceAccountIdTokenConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  Used only when using impersonation mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#delegates EphemeralGoogleServiceAccountIdToken#delegates}
  */
  readonly delegates?: string[];
  /**
  * Include the verified email in the claim. Used only when using impersonation mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#include_email EphemeralGoogleServiceAccountIdToken#include_email}
  */
  readonly includeEmail?: boolean | cdktn.IResolvable;
  /**
  * The audience claim for the `id_token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#target_audience EphemeralGoogleServiceAccountIdToken#target_audience}
  */
  readonly targetAudience: string;
  /**
  * The email of the service account being impersonated.  Used only when using impersonation mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#target_service_account EphemeralGoogleServiceAccountIdToken#target_service_account}
  */
  readonly targetServiceAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token google_service_account_id_token}
*/
export class EphemeralGoogleServiceAccountIdToken extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_account_id_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token google_service_account_id_token} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralGoogleServiceAccountIdTokenConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralGoogleServiceAccountIdTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_id_token',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._delegates = config.delegates;
    this._includeEmail = config.includeEmail;
    this._targetAudience = config.targetAudience;
    this._targetServiceAccount = config.targetServiceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegates - computed: false, optional: true, required: false
  private _delegates?: string[]; 
  public get delegates() {
    return cdktn.Fn.tolist(this.getListAttribute('delegates'));
  }
  public set delegates(value: string[]) {
    this._delegates = value;
  }
  public resetDelegates() {
    this._delegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatesInput() {
    return this._delegates;
  }

  // id_token - computed: true, optional: false, required: false
  public get idToken() {
    return this.getStringAttribute('id_token');
  }

  // include_email - computed: false, optional: true, required: false
  private _includeEmail?: boolean | cdktn.IResolvable; 
  public get includeEmail() {
    return this.getBooleanAttribute('include_email');
  }
  public set includeEmail(value: boolean | cdktn.IResolvable) {
    this._includeEmail = value;
  }
  public resetIncludeEmail() {
    this._includeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEmailInput() {
    return this._includeEmail;
  }

  // target_audience - computed: false, optional: false, required: true
  private _targetAudience?: string; 
  public get targetAudience() {
    return this.getStringAttribute('target_audience');
  }
  public set targetAudience(value: string) {
    this._targetAudience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAudienceInput() {
    return this._targetAudience;
  }

  // target_service_account - computed: false, optional: true, required: false
  private _targetServiceAccount?: string; 
  public get targetServiceAccount() {
    return this.getStringAttribute('target_service_account');
  }
  public set targetServiceAccount(value: string) {
    this._targetServiceAccount = value;
  }
  public resetTargetServiceAccount() {
    this._targetServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountInput() {
    return this._targetServiceAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegates: cdktn.listMapper(cdktn.stringToTerraform, false)(this._delegates),
      include_email: cdktn.booleanToTerraform(this._includeEmail),
      target_audience: cdktn.stringToTerraform(this._targetAudience),
      target_service_account: cdktn.stringToTerraform(this._targetServiceAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegates: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._delegates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_email: {
        value: cdktn.booleanToHclTerraform(this._includeEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_audience: {
        value: cdktn.stringToHclTerraform(this._targetAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_service_account: {
        value: cdktn.stringToHclTerraform(this._targetServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
