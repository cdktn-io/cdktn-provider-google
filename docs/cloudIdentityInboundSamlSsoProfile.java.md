# `cloudIdentityInboundSamlSsoProfile` Submodule <a name="`cloudIdentityInboundSamlSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundSamlSsoProfile <a name="CloudIdentityInboundSamlSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfile;

CloudIdentityInboundSamlSsoProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .idpConfig(CloudIdentityInboundSamlSsoProfileIdpConfig)
//  .customer(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudIdentityInboundSamlSsoProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.customer">customer</a></code> | <code>java.lang.String</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#idp_config CloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.customer"></a>

- *Type:* java.lang.String

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#customer CloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#deletion_policy CloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#display_name CloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#timeouts CloudIdentityInboundSamlSsoProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetCustomer">resetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig"></a>

```java
public void putIdpConfig(CloudIdentityInboundSamlSsoProfileIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts"></a>

```java
public void putTimeouts(CloudIdentityInboundSamlSsoProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `resetCustomer` <a name="resetCustomer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetCustomer"></a>

```java
public void resetCustomer()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfile;

CloudIdentityInboundSamlSsoProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfile;

CloudIdentityInboundSamlSsoProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfile;

CloudIdentityInboundSamlSsoProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfile;

CloudIdentityInboundSamlSsoProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudIdentityInboundSamlSsoProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudIdentityInboundSamlSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudIdentityInboundSamlSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundSamlSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId">inboundSamlSsoProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.spConfig">spConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList">CloudIdentityInboundSamlSsoProfileSpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customerInput">customerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customer">customer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfig"></a>

```java
public CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a>

---

##### `inboundSamlSsoProfileId`<sup>Required</sup> <a name="inboundSamlSsoProfileId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId"></a>

```java
public java.lang.String getInboundSamlSsoProfileId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.spConfig"></a>

```java
public CloudIdentityInboundSamlSsoProfileSpConfigList getSpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList">CloudIdentityInboundSamlSsoProfileSpConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeouts"></a>

```java
public CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customerInput"></a>

```java
public java.lang.String getCustomerInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfigInput"></a>

```java
public CloudIdentityInboundSamlSsoProfileIdpConfig getIdpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeoutsInput"></a>

```java
public IResolvable|CloudIdentityInboundSamlSsoProfileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundSamlSsoProfileConfig <a name="CloudIdentityInboundSamlSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfileConfig;

CloudIdentityInboundSamlSsoProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .idpConfig(CloudIdentityInboundSamlSsoProfileIdpConfig)
//  .customer(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudIdentityInboundSamlSsoProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.customer">customer</a></code> | <code>java.lang.String</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.idpConfig"></a>

```java
public CloudIdentityInboundSamlSsoProfileIdpConfig getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#idp_config CloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#customer CloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#deletion_policy CloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#display_name CloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.timeouts"></a>

```java
public CloudIdentityInboundSamlSsoProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#timeouts CloudIdentityInboundSamlSsoProfile#timeouts}

---

### CloudIdentityInboundSamlSsoProfileIdpConfig <a name="CloudIdentityInboundSamlSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfileIdpConfig;

CloudIdentityInboundSamlSsoProfileIdpConfig.builder()
    .entityId(java.lang.String)
    .singleSignOnServiceUri(java.lang.String)
//  .changePasswordUri(java.lang.String)
//  .logoutRedirectUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId">entityId</a></code> | <code>java.lang.String</code> | The SAML **Entity ID** of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri">singleSignOnServiceUri</a></code> | <code>java.lang.String</code> | The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri">changePasswordUri</a></code> | <code>java.lang.String</code> | The **Change Password URL** of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri">logoutRedirectUri</a></code> | <code>java.lang.String</code> | The **Logout Redirect URL** (sign-out page URL) of the identity provider. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#entity_id CloudIdentityInboundSamlSsoProfile#entity_id}

---

##### `singleSignOnServiceUri`<sup>Required</sup> <a name="singleSignOnServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri"></a>

```java
public java.lang.String getSingleSignOnServiceUri();
```

- *Type:* java.lang.String

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri CloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

##### `changePasswordUri`<sup>Optional</sup> <a name="changePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri"></a>

```java
public java.lang.String getChangePasswordUri();
```

- *Type:* java.lang.String

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#change_password_uri CloudIdentityInboundSamlSsoProfile#change_password_uri}

---

##### `logoutRedirectUri`<sup>Optional</sup> <a name="logoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri"></a>

```java
public java.lang.String getLogoutRedirectUri();
```

- *Type:* java.lang.String

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#logout_redirect_uri CloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

### CloudIdentityInboundSamlSsoProfileSpConfig <a name="CloudIdentityInboundSamlSsoProfileSpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfileSpConfig;

CloudIdentityInboundSamlSsoProfileSpConfig.builder()
    .build();
```


### CloudIdentityInboundSamlSsoProfileTimeouts <a name="CloudIdentityInboundSamlSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfileTimeouts;

CloudIdentityInboundSamlSsoProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference;

new CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri">resetChangePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri">resetLogoutRedirectUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangePasswordUri` <a name="resetChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```java
public void resetChangePasswordUri()
```

##### `resetLogoutRedirectUri` <a name="resetLogoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri"></a>

```java
public void resetLogoutRedirectUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">changePasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput">logoutRedirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput">singleSignOnServiceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri">changePasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri">logoutRedirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri">singleSignOnServiceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changePasswordUriInput`<sup>Optional</sup> <a name="changePasswordUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```java
public java.lang.String getChangePasswordUriInput();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `logoutRedirectUriInput`<sup>Optional</sup> <a name="logoutRedirectUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput"></a>

```java
public java.lang.String getLogoutRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `singleSignOnServiceUriInput`<sup>Optional</sup> <a name="singleSignOnServiceUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput"></a>

```java
public java.lang.String getSingleSignOnServiceUriInput();
```

- *Type:* java.lang.String

---

##### `changePasswordUri`<sup>Required</sup> <a name="changePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```java
public java.lang.String getChangePasswordUri();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `logoutRedirectUri`<sup>Required</sup> <a name="logoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri"></a>

```java
public java.lang.String getLogoutRedirectUri();
```

- *Type:* java.lang.String

---

##### `singleSignOnServiceUri`<sup>Required</sup> <a name="singleSignOnServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri"></a>

```java
public java.lang.String getSingleSignOnServiceUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```java
public CloudIdentityInboundSamlSsoProfileIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---


### CloudIdentityInboundSamlSsoProfileSpConfigList <a name="CloudIdentityInboundSamlSsoProfileSpConfigList" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfileSpConfigList;

new CloudIdentityInboundSamlSsoProfileSpConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get"></a>

```java
public CloudIdentityInboundSamlSsoProfileSpConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudIdentityInboundSamlSsoProfileSpConfigOutputReference <a name="CloudIdentityInboundSamlSsoProfileSpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference;

new CloudIdentityInboundSamlSsoProfileSpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri">assertionConsumerServiceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig">CloudIdentityInboundSamlSsoProfileSpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assertionConsumerServiceUri`<sup>Required</sup> <a name="assertionConsumerServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri"></a>

```java
public java.lang.String getAssertionConsumerServiceUri();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue"></a>

```java
public CloudIdentityInboundSamlSsoProfileSpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig">CloudIdentityInboundSamlSsoProfileSpConfig</a>

---


### CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_identity_inbound_saml_sso_profile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference;

new CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudIdentityInboundSamlSsoProfileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---



