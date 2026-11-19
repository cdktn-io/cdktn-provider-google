# `cloudIdentityInboundOidcSsoProfile` Submodule <a name="`cloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundOidcSsoProfile <a name="CloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfile;

CloudIdentityInboundOidcSsoProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .idpConfig(CloudIdentityInboundOidcSsoProfileIdpConfig)
//  .customer(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .rpConfig(CloudIdentityInboundOidcSsoProfileRpConfig)
//  .timeouts(CloudIdentityInboundOidcSsoProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.customer">customer</a></code> | <code>java.lang.String</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#idp_config CloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.customer"></a>

- *Type:* java.lang.String

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#customer CloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#deletion_policy CloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#display_name CloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rpConfig`<sup>Optional</sup> <a name="rpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.rpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#rp_config CloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#timeouts CloudIdentityInboundOidcSsoProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig">putRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer">resetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig">resetRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```java
public void putIdpConfig(CloudIdentityInboundOidcSsoProfileIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `putRpConfig` <a name="putRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```java
public void putRpConfig(CloudIdentityInboundOidcSsoProfileRpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```java
public void putTimeouts(CloudIdentityInboundOidcSsoProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `resetCustomer` <a name="resetCustomer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```java
public void resetCustomer()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId"></a>

```java
public void resetId()
```

##### `resetRpConfig` <a name="resetRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```java
public void resetRpConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfile;

CloudIdentityInboundOidcSsoProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfile;

CloudIdentityInboundOidcSsoProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfile;

CloudIdentityInboundOidcSsoProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfile;

CloudIdentityInboundOidcSsoProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudIdentityInboundOidcSsoProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudIdentityInboundOidcSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">inboundOidcSsoProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput">customerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput">rpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer">customer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```java
public CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `inboundOidcSsoProfileId`<sup>Required</sup> <a name="inboundOidcSsoProfileId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```java
public java.lang.String getInboundOidcSsoProfileId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rpConfig`<sup>Required</sup> <a name="rpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```java
public CloudIdentityInboundOidcSsoProfileRpConfigOutputReference getRpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```java
public CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```java
public java.lang.String getCustomerInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```java
public CloudIdentityInboundOidcSsoProfileIdpConfig getIdpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `rpConfigInput`<sup>Optional</sup> <a name="rpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```java
public CloudIdentityInboundOidcSsoProfileRpConfig getRpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```java
public IResolvable|CloudIdentityInboundOidcSsoProfileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundOidcSsoProfileConfig <a name="CloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfileConfig;

CloudIdentityInboundOidcSsoProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .idpConfig(CloudIdentityInboundOidcSsoProfileIdpConfig)
//  .customer(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .rpConfig(CloudIdentityInboundOidcSsoProfileRpConfig)
//  .timeouts(CloudIdentityInboundOidcSsoProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer">customer</a></code> | <code>java.lang.String</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```java
public CloudIdentityInboundOidcSsoProfileIdpConfig getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#idp_config CloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#customer CloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#deletion_policy CloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#display_name CloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rpConfig`<sup>Optional</sup> <a name="rpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```java
public CloudIdentityInboundOidcSsoProfileRpConfig getRpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#rp_config CloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```java
public CloudIdentityInboundOidcSsoProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#timeouts CloudIdentityInboundOidcSsoProfile#timeouts}

---

### CloudIdentityInboundOidcSsoProfileIdpConfig <a name="CloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfileIdpConfig;

CloudIdentityInboundOidcSsoProfileIdpConfig.builder()
    .issuerUri(java.lang.String)
//  .changePasswordUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">changePasswordUri</a></code> | <code>java.lang.String</code> | The **Change Password URL** of the identity provider. |

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#issuer_uri CloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `changePasswordUri`<sup>Optional</sup> <a name="changePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```java
public java.lang.String getChangePasswordUri();
```

- *Type:* java.lang.String

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#change_password_uri CloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### CloudIdentityInboundOidcSsoProfileRpConfig <a name="CloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfileRpConfig;

CloudIdentityInboundOidcSsoProfileRpConfig.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_id CloudIdentityInboundOidcSsoProfile#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_secret CloudIdentityInboundOidcSsoProfile#client_secret}

---

### CloudIdentityInboundOidcSsoProfileTimeouts <a name="CloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfileTimeouts;

CloudIdentityInboundOidcSsoProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference;

new CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">resetChangePasswordUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangePasswordUri` <a name="resetChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```java
public void resetChangePasswordUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">changePasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">changePasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changePasswordUriInput`<sup>Optional</sup> <a name="changePasswordUriInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```java
public java.lang.String getChangePasswordUriInput();
```

- *Type:* java.lang.String

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```java
public java.lang.String getIssuerUriInput();
```

- *Type:* java.lang.String

---

##### `changePasswordUri`<sup>Required</sup> <a name="changePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```java
public java.lang.String getChangePasswordUri();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```java
public CloudIdentityInboundOidcSsoProfileIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference;

new CloudIdentityInboundOidcSsoProfileRpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```java
public CloudIdentityInboundOidcSsoProfileRpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_oidc_sso_profile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference;

new CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudIdentityInboundOidcSsoProfileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---



