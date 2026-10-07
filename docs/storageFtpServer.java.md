# `storageFtpServer` Submodule <a name="`storageFtpServer` Submodule" id="@cdktn/provider-google.storageFtpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpServer <a name="StorageFtpServer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server google_storage_ftp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServer;

StorageFtpServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessType(java.lang.String)
    .location(java.lang.String)
    .serverId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .externalConfig(StorageFtpServerExternalConfig)
//  .id(java.lang.String)
//  .internalConfig(StorageFtpServerInternalConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(StorageFtpServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.accessType">accessType</a></code> | <code>java.lang.String</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.serverId">serverId</a></code> | <code>java.lang.String</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.externalConfig">externalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.internalConfig">internalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.accessType"></a>

- *Type:* java.lang.String

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#access_type StorageFtpServer#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#location StorageFtpServer#location}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.serverId"></a>

- *Type:* java.lang.String

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#server_id StorageFtpServer#server_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#deletion_policy StorageFtpServer#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#display_name StorageFtpServer#display_name}

---

##### `externalConfig`<sup>Optional</sup> <a name="externalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.externalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#external_config StorageFtpServer#external_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalConfig`<sup>Optional</sup> <a name="internalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.internalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#internal_config StorageFtpServer#internal_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#labels StorageFtpServer#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#timeouts StorageFtpServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig">putExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig">putInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetExternalConfig">resetExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetInternalConfig">resetInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalConfig` <a name="putExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig"></a>

```java
public void putExternalConfig(StorageFtpServerExternalConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---

##### `putInternalConfig` <a name="putInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig"></a>

```java
public void putInternalConfig(StorageFtpServerInternalConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts"></a>

```java
public void putTimeouts(StorageFtpServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExternalConfig` <a name="resetExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetExternalConfig"></a>

```java
public void resetExternalConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetId"></a>

```java
public void resetId()
```

##### `resetInternalConfig` <a name="resetInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetInternalConfig"></a>

```java
public void resetInternalConfig()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServer;

StorageFtpServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServer;

StorageFtpServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServer;

StorageFtpServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServer;

StorageFtpServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageFtpServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageFtpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageFtpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfig">externalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference">StorageFtpServerExternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfig">internalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference">StorageFtpServerInternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serviceAgent">serviceAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference">StorageFtpServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessTypeInput">accessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfigInput">externalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfigInput">internalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverIdInput">serverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `externalConfig`<sup>Required</sup> <a name="externalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfig"></a>

```java
public StorageFtpServerExternalConfigOutputReference getExternalConfig();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference">StorageFtpServerExternalConfigOutputReference</a>

---

##### `internalConfig`<sup>Required</sup> <a name="internalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfig"></a>

```java
public StorageFtpServerInternalConfigOutputReference getInternalConfig();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference">StorageFtpServerInternalConfigOutputReference</a>

---

##### `serviceAgent`<sup>Required</sup> <a name="serviceAgent" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serviceAgent"></a>

```java
public java.lang.String getServiceAgent();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeouts"></a>

```java
public StorageFtpServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference">StorageFtpServerTimeoutsOutputReference</a>

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessTypeInput"></a>

```java
public java.lang.String getAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalConfigInput`<sup>Optional</sup> <a name="externalConfigInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfigInput"></a>

```java
public StorageFtpServerExternalConfig getExternalConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internalConfigInput`<sup>Optional</sup> <a name="internalConfigInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfigInput"></a>

```java
public StorageFtpServerInternalConfig getInternalConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverIdInput"></a>

```java
public java.lang.String getServerIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeoutsInput"></a>

```java
public IResolvable|StorageFtpServerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpServerConfig <a name="StorageFtpServerConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerConfig;

StorageFtpServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessType(java.lang.String)
    .location(java.lang.String)
    .serverId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .externalConfig(StorageFtpServerExternalConfig)
//  .id(java.lang.String)
//  .internalConfig(StorageFtpServerInternalConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(StorageFtpServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.accessType">accessType</a></code> | <code>java.lang.String</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.serverId">serverId</a></code> | <code>java.lang.String</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.externalConfig">externalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.internalConfig">internalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#access_type StorageFtpServer#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#location StorageFtpServer#location}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#server_id StorageFtpServer#server_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#deletion_policy StorageFtpServer#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#display_name StorageFtpServer#display_name}

---

##### `externalConfig`<sup>Optional</sup> <a name="externalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.externalConfig"></a>

```java
public StorageFtpServerExternalConfig getExternalConfig();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#external_config StorageFtpServer#external_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalConfig`<sup>Optional</sup> <a name="internalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.internalConfig"></a>

```java
public StorageFtpServerInternalConfig getInternalConfig();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#internal_config StorageFtpServer#internal_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#labels StorageFtpServer#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.timeouts"></a>

```java
public StorageFtpServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#timeouts StorageFtpServer#timeouts}

---

### StorageFtpServerExternalConfig <a name="StorageFtpServerExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerExternalConfig;

StorageFtpServerExternalConfig.builder()
//  .allowedCidrBlocks(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.property.allowedCidrBlocks">allowedCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server. |

---

##### `allowedCidrBlocks`<sup>Optional</sup> <a name="allowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.property.allowedCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getAllowedCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#allowed_cidr_blocks StorageFtpServer#allowed_cidr_blocks}

---

### StorageFtpServerInternalConfig <a name="StorageFtpServerInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerInternalConfig;

StorageFtpServerInternalConfig.builder()
//  .consumerAcceptList(IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerAcceptListStruct>)
//  .consumerRejectList(IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerRejectListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerAcceptList">consumerAcceptList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>></code> | consumer_accept_list block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerRejectList">consumerRejectList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>></code> | consumer_reject_list block. |

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerAcceptList"></a>

```java
public IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerAcceptListStruct> getConsumerAcceptList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>>

consumer_accept_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_accept_list StorageFtpServer#consumer_accept_list}

---

##### `consumerRejectList`<sup>Optional</sup> <a name="consumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerRejectList"></a>

```java
public IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerRejectListStruct> getConsumerRejectList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>>

consumer_reject_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_reject_list StorageFtpServer#consumer_reject_list}

---

### StorageFtpServerInternalConfigConsumerAcceptListStruct <a name="StorageFtpServerInternalConfigConsumerAcceptListStruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerInternalConfigConsumerAcceptListStruct;

StorageFtpServerInternalConfigConsumerAcceptListStruct.builder()
    .connectionLimit(java.lang.Number)
    .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | The maximum number of Private Service Connect endpoints that can be created in the consumer project. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.project">project</a></code> | <code>java.lang.String</code> | The project that is allowed to connect, in the format 'projects/{project}'. |

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

The maximum number of Private Service Connect endpoints that can be created in the consumer project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#connection_limit StorageFtpServer#connection_limit}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project that is allowed to connect, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}

---

### StorageFtpServerInternalConfigConsumerRejectListStruct <a name="StorageFtpServerInternalConfigConsumerRejectListStruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerInternalConfigConsumerRejectListStruct;

StorageFtpServerInternalConfigConsumerRejectListStruct.builder()
    .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.property.project">project</a></code> | <code>java.lang.String</code> | The project that is rejected from connecting, in the format 'projects/{project}'. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project that is rejected from connecting, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}

---

### StorageFtpServerTimeouts <a name="StorageFtpServerTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerTimeouts;

StorageFtpServerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpServerExternalConfigOutputReference <a name="StorageFtpServerExternalConfigOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerExternalConfigOutputReference;

new StorageFtpServerExternalConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks">resetAllowedCidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCidrBlocks` <a name="resetAllowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks"></a>

```java
public void resetAllowedCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput">allowedCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks">allowedCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `allowedCidrBlocksInput`<sup>Optional</sup> <a name="allowedCidrBlocksInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getAllowedCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedCidrBlocks`<sup>Required</sup> <a name="allowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getAllowedCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.internalValue"></a>

```java
public StorageFtpServerExternalConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---


### StorageFtpServerInternalConfigConsumerAcceptListStructList <a name="StorageFtpServerInternalConfigConsumerAcceptListStructList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerInternalConfigConsumerAcceptListStructList;

new StorageFtpServerInternalConfigConsumerAcceptListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get"></a>

```java
public StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerAcceptListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>>

---


### StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference <a name="StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference;

new StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput">connectionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput"></a>

```java
public java.lang.Number getConnectionLimitInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageFtpServerInternalConfigConsumerAcceptListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>

---


### StorageFtpServerInternalConfigConsumerRejectListStructList <a name="StorageFtpServerInternalConfigConsumerRejectListStructList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerInternalConfigConsumerRejectListStructList;

new StorageFtpServerInternalConfigConsumerRejectListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get"></a>

```java
public StorageFtpServerInternalConfigConsumerRejectListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerRejectListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>>

---


### StorageFtpServerInternalConfigConsumerRejectListStructOutputReference <a name="StorageFtpServerInternalConfigConsumerRejectListStructOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference;

new StorageFtpServerInternalConfigConsumerRejectListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageFtpServerInternalConfigConsumerRejectListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>

---


### StorageFtpServerInternalConfigOutputReference <a name="StorageFtpServerInternalConfigOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerInternalConfigOutputReference;

new StorageFtpServerInternalConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList">putConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList">putConsumerRejectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList">resetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerRejectList">resetConsumerRejectList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumerAcceptList` <a name="putConsumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList"></a>

```java
public void putConsumerAcceptList(IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerAcceptListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>>

---

##### `putConsumerRejectList` <a name="putConsumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList"></a>

```java
public void putConsumerRejectList(IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerRejectListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>>

---

##### `resetConsumerAcceptList` <a name="resetConsumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList"></a>

```java
public void resetConsumerAcceptList()
```

##### `resetConsumerRejectList` <a name="resetConsumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerRejectList"></a>

```java
public void resetConsumerRejectList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptList">consumerAcceptList</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList">StorageFtpServerInternalConfigConsumerAcceptListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectList">consumerRejectList</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList">StorageFtpServerInternalConfigConsumerRejectListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput">consumerAcceptListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput">consumerRejectListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerAcceptList`<sup>Required</sup> <a name="consumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptList"></a>

```java
public StorageFtpServerInternalConfigConsumerAcceptListStructList getConsumerAcceptList();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList">StorageFtpServerInternalConfigConsumerAcceptListStructList</a>

---

##### `consumerRejectList`<sup>Required</sup> <a name="consumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectList"></a>

```java
public StorageFtpServerInternalConfigConsumerRejectListStructList getConsumerRejectList();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList">StorageFtpServerInternalConfigConsumerRejectListStructList</a>

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `consumerAcceptListInput`<sup>Optional</sup> <a name="consumerAcceptListInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput"></a>

```java
public IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerAcceptListStruct> getConsumerAcceptListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>>

---

##### `consumerRejectListInput`<sup>Optional</sup> <a name="consumerRejectListInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput"></a>

```java
public IResolvable|java.util.List<StorageFtpServerInternalConfigConsumerRejectListStruct> getConsumerRejectListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.internalValue"></a>

```java
public StorageFtpServerInternalConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---


### StorageFtpServerTimeoutsOutputReference <a name="StorageFtpServerTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_server.StorageFtpServerTimeoutsOutputReference;

new StorageFtpServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageFtpServerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---



