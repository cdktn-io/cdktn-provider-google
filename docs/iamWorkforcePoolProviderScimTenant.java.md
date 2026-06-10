# `iamWorkforcePoolProviderScimTenant` Submodule <a name="`iamWorkforcePoolProviderScimTenant` Submodule" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProviderScimTenant <a name="IamWorkforcePoolProviderScimTenant" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant google_iam_workforce_pool_provider_scim_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer"></a>

```java
import io.cdktn.providers.google.iam_workforce_pool_provider_scim_tenant.IamWorkforcePoolProviderScimTenant;

IamWorkforcePoolProviderScimTenant.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .providerId(java.lang.String)
    .scimTenantId(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .claimMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .hardDelete(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .timeouts(IamWorkforcePoolProviderScimTenantTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID of the provider. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.scimTenantId">scimTenantId</a></code> | <code>java.lang.String</code> | The ID to use for the SCIM tenant, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID of the workforce pool. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.claimMapping">claimMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name for the scim tenant. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.hardDelete">hardDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deletes the SCIM tenant immediately. This operation cannot be undone. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#id IamWorkforcePoolProviderScimTenant#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#location IamWorkforcePoolProviderScimTenant#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.providerId"></a>

- *Type:* java.lang.String

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#provider_id IamWorkforcePoolProviderScimTenant#provider_id}

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.scimTenantId"></a>

- *Type:* java.lang.String

The ID to use for the SCIM tenant, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#scim_tenant_id IamWorkforcePoolProviderScimTenant#scim_tenant_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.workforcePoolId"></a>

- *Type:* java.lang.String

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#workforce_pool_id IamWorkforcePoolProviderScimTenant#workforce_pool_id}

---

##### `claimMapping`<sup>Optional</sup> <a name="claimMapping" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.claimMapping"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#claim_mapping IamWorkforcePoolProviderScimTenant#claim_mapping}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#deletion_policy IamWorkforcePoolProviderScimTenant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#description IamWorkforcePoolProviderScimTenant#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-specified display name for the scim tenant. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#display_name IamWorkforcePoolProviderScimTenant#display_name}

---

##### `hardDelete`<sup>Optional</sup> <a name="hardDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.hardDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deletes the SCIM tenant immediately. This operation cannot be undone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#hard_delete IamWorkforcePoolProviderScimTenant#hard_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#id IamWorkforcePoolProviderScimTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#timeouts IamWorkforcePoolProviderScimTenant#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetClaimMapping">resetClaimMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetHardDelete">resetHardDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.putTimeouts"></a>

```java
public void putTimeouts(IamWorkforcePoolProviderScimTenantTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

---

##### `resetClaimMapping` <a name="resetClaimMapping" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetClaimMapping"></a>

```java
public void resetClaimMapping()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetHardDelete` <a name="resetHardDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetHardDelete"></a>

```java
public void resetHardDelete()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isConstruct"></a>

```java
import io.cdktn.providers.google.iam_workforce_pool_provider_scim_tenant.IamWorkforcePoolProviderScimTenant;

IamWorkforcePoolProviderScimTenant.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformElement"></a>

```java
import io.cdktn.providers.google.iam_workforce_pool_provider_scim_tenant.IamWorkforcePoolProviderScimTenant;

IamWorkforcePoolProviderScimTenant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformResource"></a>

```java
import io.cdktn.providers.google.iam_workforce_pool_provider_scim_tenant.IamWorkforcePoolProviderScimTenant;

IamWorkforcePoolProviderScimTenant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.iam_workforce_pool_provider_scim_tenant.IamWorkforcePoolProviderScimTenant;

IamWorkforcePoolProviderScimTenant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamWorkforcePoolProviderScimTenant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamWorkforcePoolProviderScimTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamWorkforcePoolProviderScimTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProviderScimTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.baseUri">baseUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.purgeTime">purgeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.serviceAgent">serviceAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference">IamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.claimMappingInput">claimMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.hardDeleteInput">hardDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.providerIdInput">providerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.scimTenantIdInput">scimTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.claimMapping">claimMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.hardDelete">hardDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.scimTenantId">scimTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseUri`<sup>Required</sup> <a name="baseUri" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.baseUri"></a>

```java
public java.lang.String getBaseUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.purgeTime"></a>

```java
public java.lang.String getPurgeTime();
```

- *Type:* java.lang.String

---

##### `serviceAgent`<sup>Required</sup> <a name="serviceAgent" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.serviceAgent"></a>

```java
public java.lang.String getServiceAgent();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.timeouts"></a>

```java
public IamWorkforcePoolProviderScimTenantTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference">IamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a>

---

##### `claimMappingInput`<sup>Optional</sup> <a name="claimMappingInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.claimMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `hardDeleteInput`<sup>Optional</sup> <a name="hardDeleteInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.hardDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getHardDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.providerIdInput"></a>

```java
public java.lang.String getProviderIdInput();
```

- *Type:* java.lang.String

---

##### `scimTenantIdInput`<sup>Optional</sup> <a name="scimTenantIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.scimTenantIdInput"></a>

```java
public java.lang.String getScimTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.timeoutsInput"></a>

```java
public IResolvable|IamWorkforcePoolProviderScimTenantTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput"></a>

```java
public java.lang.String getWorkforcePoolIdInput();
```

- *Type:* java.lang.String

---

##### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.claimMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `hardDelete`<sup>Required</sup> <a name="hardDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.hardDelete"></a>

```java
public java.lang.Boolean|IResolvable getHardDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.scimTenantId"></a>

```java
public java.lang.String getScimTenantId();
```

- *Type:* java.lang.String

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderScimTenantConfig <a name="IamWorkforcePoolProviderScimTenantConfig" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.Initializer"></a>

```java
import io.cdktn.providers.google.iam_workforce_pool_provider_scim_tenant.IamWorkforcePoolProviderScimTenantConfig;

IamWorkforcePoolProviderScimTenantConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .providerId(java.lang.String)
    .scimTenantId(java.lang.String)
    .workforcePoolId(java.lang.String)
//  .claimMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .hardDelete(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .timeouts(IamWorkforcePoolProviderScimTenantTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.providerId">providerId</a></code> | <code>java.lang.String</code> | The ID of the provider. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.scimTenantId">scimTenantId</a></code> | <code>java.lang.String</code> | The ID to use for the SCIM tenant, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>java.lang.String</code> | The ID of the workforce pool. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.claimMapping">claimMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.description">description</a></code> | <code>java.lang.String</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name for the scim tenant. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.hardDelete">hardDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deletes the SCIM tenant immediately. This operation cannot be undone. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#id IamWorkforcePoolProviderScimTenant#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#location IamWorkforcePoolProviderScimTenant#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#provider_id IamWorkforcePoolProviderScimTenant#provider_id}

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.scimTenantId"></a>

```java
public java.lang.String getScimTenantId();
```

- *Type:* java.lang.String

The ID to use for the SCIM tenant, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#scim_tenant_id IamWorkforcePoolProviderScimTenant#scim_tenant_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId"></a>

```java
public java.lang.String getWorkforcePoolId();
```

- *Type:* java.lang.String

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#workforce_pool_id IamWorkforcePoolProviderScimTenant#workforce_pool_id}

---

##### `claimMapping`<sup>Optional</sup> <a name="claimMapping" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.claimMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#claim_mapping IamWorkforcePoolProviderScimTenant#claim_mapping}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#deletion_policy IamWorkforcePoolProviderScimTenant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#description IamWorkforcePoolProviderScimTenant#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-specified display name for the scim tenant. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#display_name IamWorkforcePoolProviderScimTenant#display_name}

---

##### `hardDelete`<sup>Optional</sup> <a name="hardDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.hardDelete"></a>

```java
public java.lang.Boolean|IResolvable getHardDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deletes the SCIM tenant immediately. This operation cannot be undone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#hard_delete IamWorkforcePoolProviderScimTenant#hard_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#id IamWorkforcePoolProviderScimTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.timeouts"></a>

```java
public IamWorkforcePoolProviderScimTenantTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#timeouts IamWorkforcePoolProviderScimTenant#timeouts}

---

### IamWorkforcePoolProviderScimTenantTimeouts <a name="IamWorkforcePoolProviderScimTenantTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.iam_workforce_pool_provider_scim_tenant.IamWorkforcePoolProviderScimTenantTimeouts;

IamWorkforcePoolProviderScimTenantTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#create IamWorkforcePoolProviderScimTenant#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#delete IamWorkforcePoolProviderScimTenant#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#update IamWorkforcePoolProviderScimTenant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#create IamWorkforcePoolProviderScimTenant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#delete IamWorkforcePoolProviderScimTenant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iam_workforce_pool_provider_scim_tenant#update IamWorkforcePoolProviderScimTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderScimTenantTimeoutsOutputReference <a name="IamWorkforcePoolProviderScimTenantTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iam_workforce_pool_provider_scim_tenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference;

new IamWorkforcePoolProviderScimTenantTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IamWorkforcePoolProviderScimTenantTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

---



