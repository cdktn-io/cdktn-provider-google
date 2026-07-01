# `certificateManagerTrustConfig` Submodule <a name="`certificateManagerTrustConfig` Submodule" id="@cdktn/provider-google.certificateManagerTrustConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerTrustConfig <a name="CertificateManagerTrustConfig" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config google_certificate_manager_trust_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfig;

CertificateManagerTrustConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .allowlistedCertificates(IResolvable|java.util.List<CertificateManagerTrustConfigAllowlistedCertificates>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(CertificateManagerTrustConfigTimeouts)
//  .trustStores(IResolvable|java.util.List<CertificateManagerTrustConfigTrustStores>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The trust config location. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.allowlistedCertificates">allowlistedCertificates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>></code> | allowlisted_certificates block. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.trustStores">trustStores</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>></code> | trust_stores block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#location CertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#name CertificateManagerTrustConfig#name}

---

##### `allowlistedCertificates`<sup>Optional</sup> <a name="allowlistedCertificates" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.allowlistedCertificates"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>>

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#allowlisted_certificates CertificateManagerTrustConfig#allowlisted_certificates}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#deletion_policy CertificateManagerTrustConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#description CertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#labels CertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#timeouts CertificateManagerTrustConfig#timeouts}

---

##### `trustStores`<sup>Optional</sup> <a name="trustStores" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.trustStores"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>>

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#trust_stores CertificateManagerTrustConfig#trust_stores}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates">putAllowlistedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores">putTrustStores</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetAllowlistedCertificates">resetAllowlistedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTrustStores">resetTrustStores</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowlistedCertificates` <a name="putAllowlistedCertificates" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates"></a>

```java
public void putAllowlistedCertificates(IResolvable|java.util.List<CertificateManagerTrustConfigAllowlistedCertificates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts"></a>

```java
public void putTimeouts(CertificateManagerTrustConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

---

##### `putTrustStores` <a name="putTrustStores" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores"></a>

```java
public void putTrustStores(IResolvable|java.util.List<CertificateManagerTrustConfigTrustStores> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>>

---

##### `resetAllowlistedCertificates` <a name="resetAllowlistedCertificates" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetAllowlistedCertificates"></a>

```java
public void resetAllowlistedCertificates()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrustStores` <a name="resetTrustStores" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTrustStores"></a>

```java
public void resetTrustStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CertificateManagerTrustConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfig;

CertificateManagerTrustConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfig;

CertificateManagerTrustConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfig;

CertificateManagerTrustConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfig;

CertificateManagerTrustConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CertificateManagerTrustConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CertificateManagerTrustConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CertificateManagerTrustConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CertificateManagerTrustConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CertificateManagerTrustConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificates">allowlistedCertificates</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList">CertificateManagerTrustConfigAllowlistedCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference">CertificateManagerTrustConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStores">trustStores</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList">CertificateManagerTrustConfigTrustStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificatesInput">allowlistedCertificatesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStoresInput">trustStoresInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowlistedCertificates`<sup>Required</sup> <a name="allowlistedCertificates" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificates"></a>

```java
public CertificateManagerTrustConfigAllowlistedCertificatesList getAllowlistedCertificates();
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList">CertificateManagerTrustConfigAllowlistedCertificatesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeouts"></a>

```java
public CertificateManagerTrustConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference">CertificateManagerTrustConfigTimeoutsOutputReference</a>

---

##### `trustStores`<sup>Required</sup> <a name="trustStores" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStores"></a>

```java
public CertificateManagerTrustConfigTrustStoresList getTrustStores();
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList">CertificateManagerTrustConfigTrustStoresList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `allowlistedCertificatesInput`<sup>Optional</sup> <a name="allowlistedCertificatesInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificatesInput"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigAllowlistedCertificates> getAllowlistedCertificatesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeoutsInput"></a>

```java
public IResolvable|CertificateManagerTrustConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

---

##### `trustStoresInput`<sup>Optional</sup> <a name="trustStoresInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStoresInput"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStores> getTrustStoresInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerTrustConfigAllowlistedCertificates <a name="CertificateManagerTrustConfigAllowlistedCertificates" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigAllowlistedCertificates;

CertificateManagerTrustConfigAllowlistedCertificates.builder()
    .pemCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | PEM certificate that is allowlisted. |

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

PEM certificate that is allowlisted.

The certificate can be up to 5k bytes, and must be a parseable X.509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

### CertificateManagerTrustConfigConfig <a name="CertificateManagerTrustConfigConfig" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigConfig;

CertificateManagerTrustConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .allowlistedCertificates(IResolvable|java.util.List<CertificateManagerTrustConfigAllowlistedCertificates>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(CertificateManagerTrustConfigTimeouts)
//  .trustStores(IResolvable|java.util.List<CertificateManagerTrustConfigTrustStores>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The trust config location. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.allowlistedCertificates">allowlistedCertificates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>></code> | allowlisted_certificates block. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.trustStores">trustStores</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>></code> | trust_stores block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#location CertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#name CertificateManagerTrustConfig#name}

---

##### `allowlistedCertificates`<sup>Optional</sup> <a name="allowlistedCertificates" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.allowlistedCertificates"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigAllowlistedCertificates> getAllowlistedCertificates();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>>

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#allowlisted_certificates CertificateManagerTrustConfig#allowlisted_certificates}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#deletion_policy CertificateManagerTrustConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#description CertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#labels CertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.timeouts"></a>

```java
public CertificateManagerTrustConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#timeouts CertificateManagerTrustConfig#timeouts}

---

##### `trustStores`<sup>Optional</sup> <a name="trustStores" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.trustStores"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStores> getTrustStores();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>>

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#trust_stores CertificateManagerTrustConfig#trust_stores}

---

### CertificateManagerTrustConfigTimeouts <a name="CertificateManagerTrustConfigTimeouts" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTimeouts;

CertificateManagerTrustConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}.

---

### CertificateManagerTrustConfigTrustStores <a name="CertificateManagerTrustConfigTrustStores" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStores;

CertificateManagerTrustConfigTrustStores.builder()
//  .intermediateCas(IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresIntermediateCas>)
//  .trustAnchors(IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresTrustAnchors>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.intermediateCas">intermediateCas</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>></code> | intermediate_cas block. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.trustAnchors">trustAnchors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>></code> | trust_anchors block. |

---

##### `intermediateCas`<sup>Optional</sup> <a name="intermediateCas" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.intermediateCas"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresIntermediateCas> getIntermediateCas();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>>

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#intermediate_cas CertificateManagerTrustConfig#intermediate_cas}

---

##### `trustAnchors`<sup>Optional</sup> <a name="trustAnchors" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.trustAnchors"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresTrustAnchors> getTrustAnchors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>>

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#trust_anchors CertificateManagerTrustConfig#trust_anchors}

---

### CertificateManagerTrustConfigTrustStoresIntermediateCas <a name="CertificateManagerTrustConfigTrustStoresIntermediateCas" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStoresIntermediateCas;

CertificateManagerTrustConfigTrustStoresIntermediateCas.builder()
//  .pemCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | PEM intermediate certificate used for building up paths for validation. |

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

PEM intermediate certificate used for building up paths for validation.

Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

### CertificateManagerTrustConfigTrustStoresTrustAnchors <a name="CertificateManagerTrustConfigTrustStoresTrustAnchors" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStoresTrustAnchors;

CertificateManagerTrustConfigTrustStoresTrustAnchors.builder()
//  .pemCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. |

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerTrustConfigAllowlistedCertificatesList <a name="CertificateManagerTrustConfigAllowlistedCertificatesList" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigAllowlistedCertificatesList;

new CertificateManagerTrustConfigAllowlistedCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get"></a>

```java
public CertificateManagerTrustConfigAllowlistedCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigAllowlistedCertificates> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>>

---


### CertificateManagerTrustConfigAllowlistedCertificatesOutputReference <a name="CertificateManagerTrustConfigAllowlistedCertificatesOutputReference" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference;

new CertificateManagerTrustConfigAllowlistedCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue"></a>

```java
public IResolvable|CertificateManagerTrustConfigAllowlistedCertificates getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>

---


### CertificateManagerTrustConfigTimeoutsOutputReference <a name="CertificateManagerTrustConfigTimeoutsOutputReference" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTimeoutsOutputReference;

new CertificateManagerTrustConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CertificateManagerTrustConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

---


### CertificateManagerTrustConfigTrustStoresIntermediateCasList <a name="CertificateManagerTrustConfigTrustStoresIntermediateCasList" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStoresIntermediateCasList;

new CertificateManagerTrustConfigTrustStoresIntermediateCasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get"></a>

```java
public CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresIntermediateCas> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>>

---


### CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference <a name="CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference;

new CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate"></a>

```java
public void resetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue"></a>

```java
public IResolvable|CertificateManagerTrustConfigTrustStoresIntermediateCas getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>

---


### CertificateManagerTrustConfigTrustStoresList <a name="CertificateManagerTrustConfigTrustStoresList" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStoresList;

new CertificateManagerTrustConfigTrustStoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get"></a>

```java
public CertificateManagerTrustConfigTrustStoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStores> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>>

---


### CertificateManagerTrustConfigTrustStoresOutputReference <a name="CertificateManagerTrustConfigTrustStoresOutputReference" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStoresOutputReference;

new CertificateManagerTrustConfigTrustStoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas">putIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors">putTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas">resetIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors">resetTrustAnchors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntermediateCas` <a name="putIntermediateCas" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas"></a>

```java
public void putIntermediateCas(IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresIntermediateCas> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>>

---

##### `putTrustAnchors` <a name="putTrustAnchors" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors"></a>

```java
public void putTrustAnchors(IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresTrustAnchors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>>

---

##### `resetIntermediateCas` <a name="resetIntermediateCas" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas"></a>

```java
public void resetIntermediateCas()
```

##### `resetTrustAnchors` <a name="resetTrustAnchors" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors"></a>

```java
public void resetTrustAnchors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas">intermediateCas</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList">CertificateManagerTrustConfigTrustStoresIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors">trustAnchors</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList">CertificateManagerTrustConfigTrustStoresTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput">intermediateCasInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput">trustAnchorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intermediateCas`<sup>Required</sup> <a name="intermediateCas" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas"></a>

```java
public CertificateManagerTrustConfigTrustStoresIntermediateCasList getIntermediateCas();
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList">CertificateManagerTrustConfigTrustStoresIntermediateCasList</a>

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors"></a>

```java
public CertificateManagerTrustConfigTrustStoresTrustAnchorsList getTrustAnchors();
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList">CertificateManagerTrustConfigTrustStoresTrustAnchorsList</a>

---

##### `intermediateCasInput`<sup>Optional</sup> <a name="intermediateCasInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresIntermediateCas> getIntermediateCasInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>>

---

##### `trustAnchorsInput`<sup>Optional</sup> <a name="trustAnchorsInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresTrustAnchors> getTrustAnchorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue"></a>

```java
public IResolvable|CertificateManagerTrustConfigTrustStores getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>

---


### CertificateManagerTrustConfigTrustStoresTrustAnchorsList <a name="CertificateManagerTrustConfigTrustStoresTrustAnchorsList" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStoresTrustAnchorsList;

new CertificateManagerTrustConfigTrustStoresTrustAnchorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get"></a>

```java
public CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CertificateManagerTrustConfigTrustStoresTrustAnchors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>>

---


### CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference <a name="CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.certificate_manager_trust_config.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference;

new CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate"></a>

```java
public void resetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue"></a>

```java
public IResolvable|CertificateManagerTrustConfigTrustStoresTrustAnchors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>

---



