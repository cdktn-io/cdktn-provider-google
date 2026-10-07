# `storageFtpUser` Submodule <a name="`storageFtpUser` Submodule" id="@cdktn/provider-google.storageFtpUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpUser <a name="StorageFtpUser" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user google_storage_ftp_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUser;

StorageFtpUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customerServiceAccount(java.lang.String)
    .location(java.lang.String)
    .serverId(java.lang.String)
    .userId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .storageDirectoryMappings(IResolvable|java.util.List<StorageFtpUserStorageDirectoryMappings>)
//  .timeouts(StorageFtpUserTimeouts)
//  .userCredentials(IResolvable|java.util.List<StorageFtpUserUserCredentials>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.customerServiceAccount">customerServiceAccount</a></code> | <code>java.lang.String</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.serverId">serverId</a></code> | <code>java.lang.String</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.storageDirectoryMappings">storageDirectoryMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>></code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.userCredentials">userCredentials</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>></code> | user_credentials block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customerServiceAccount`<sup>Required</sup> <a name="customerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.customerServiceAccount"></a>

- *Type:* java.lang.String

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#customer_service_account StorageFtpUser#customer_service_account}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#location StorageFtpUser#location}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.serverId"></a>

- *Type:* java.lang.String

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#server_id StorageFtpUser#server_id}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_id StorageFtpUser#user_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#deletion_policy StorageFtpUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#labels StorageFtpUser#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}.

---

##### `storageDirectoryMappings`<sup>Optional</sup> <a name="storageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.storageDirectoryMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>>

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#storage_directory_mappings StorageFtpUser#storage_directory_mappings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#timeouts StorageFtpUser#timeouts}

---

##### `userCredentials`<sup>Optional</sup> <a name="userCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.userCredentials"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>>

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_credentials StorageFtpUser#user_credentials}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings">putStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials">putUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings">resetStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials">resetUserCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageDirectoryMappings` <a name="putStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings"></a>

```java
public void putStorageDirectoryMappings(IResolvable|java.util.List<StorageFtpUserStorageDirectoryMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts"></a>

```java
public void putTimeouts(StorageFtpUserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---

##### `putUserCredentials` <a name="putUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials"></a>

```java
public void putUserCredentials(IResolvable|java.util.List<StorageFtpUserUserCredentials> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject"></a>

```java
public void resetProject()
```

##### `resetStorageDirectoryMappings` <a name="resetStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings"></a>

```java
public void resetStorageDirectoryMappings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserCredentials` <a name="resetUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials"></a>

```java
public void resetUserCredentials()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUser;

StorageFtpUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUser;

StorageFtpUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUser;

StorageFtpUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUser;

StorageFtpUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageFtpUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageFtpUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageFtpUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings">storageDirectoryMappings</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials">userCredentials</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput">customerServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput">serverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput">storageDirectoryMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput">userCredentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount">customerServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageDirectoryMappings`<sup>Required</sup> <a name="storageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings"></a>

```java
public StorageFtpUserStorageDirectoryMappingsList getStorageDirectoryMappings();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts"></a>

```java
public StorageFtpUserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a>

---

##### `userCredentials`<sup>Required</sup> <a name="userCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials"></a>

```java
public StorageFtpUserUserCredentialsList getUserCredentials();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `customerServiceAccountInput`<sup>Optional</sup> <a name="customerServiceAccountInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput"></a>

```java
public java.lang.String getCustomerServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput"></a>

```java
public java.lang.String getServerIdInput();
```

- *Type:* java.lang.String

---

##### `storageDirectoryMappingsInput`<sup>Optional</sup> <a name="storageDirectoryMappingsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput"></a>

```java
public IResolvable|java.util.List<StorageFtpUserStorageDirectoryMappings> getStorageDirectoryMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput"></a>

```java
public IResolvable|StorageFtpUserTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---

##### `userCredentialsInput`<sup>Optional</sup> <a name="userCredentialsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput"></a>

```java
public IResolvable|java.util.List<StorageFtpUserUserCredentials> getUserCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `customerServiceAccount`<sup>Required</sup> <a name="customerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount"></a>

```java
public java.lang.String getCustomerServiceAccount();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpUserConfig <a name="StorageFtpUserConfig" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserConfig;

StorageFtpUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customerServiceAccount(java.lang.String)
    .location(java.lang.String)
    .serverId(java.lang.String)
    .userId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .storageDirectoryMappings(IResolvable|java.util.List<StorageFtpUserStorageDirectoryMappings>)
//  .timeouts(StorageFtpUserTimeouts)
//  .userCredentials(IResolvable|java.util.List<StorageFtpUserUserCredentials>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount">customerServiceAccount</a></code> | <code>java.lang.String</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId">serverId</a></code> | <code>java.lang.String</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings">storageDirectoryMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>></code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials">userCredentials</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>></code> | user_credentials block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customerServiceAccount`<sup>Required</sup> <a name="customerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount"></a>

```java
public java.lang.String getCustomerServiceAccount();
```

- *Type:* java.lang.String

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#customer_service_account StorageFtpUser#customer_service_account}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#location StorageFtpUser#location}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#server_id StorageFtpUser#server_id}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_id StorageFtpUser#user_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#deletion_policy StorageFtpUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#labels StorageFtpUser#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}.

---

##### `storageDirectoryMappings`<sup>Optional</sup> <a name="storageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings"></a>

```java
public IResolvable|java.util.List<StorageFtpUserStorageDirectoryMappings> getStorageDirectoryMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>>

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#storage_directory_mappings StorageFtpUser#storage_directory_mappings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts"></a>

```java
public StorageFtpUserTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#timeouts StorageFtpUser#timeouts}

---

##### `userCredentials`<sup>Optional</sup> <a name="userCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials"></a>

```java
public IResolvable|java.util.List<StorageFtpUserUserCredentials> getUserCredentials();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>>

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_credentials StorageFtpUser#user_credentials}

---

### StorageFtpUserStorageDirectoryMappings <a name="StorageFtpUserStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserStorageDirectoryMappings;

StorageFtpUserStorageDirectoryMappings.builder()
//  .bucket(java.lang.String)
//  .bucketPrefix(java.lang.String)
//  .directory(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The Cloud Storage bucket name. Omit the gs://. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | The path of a folder within the bucket to set as the root directory for this directory mapping. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory">directory</a></code> | <code>java.lang.String</code> | The directory path in the virtual file system. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission">permission</a></code> | <code>java.lang.String</code> | The access level for the directory. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The Cloud Storage bucket name. Omit the gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket StorageFtpUser#bucket}

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

The path of a folder within the bucket to set as the root directory for this directory mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket_prefix StorageFtpUser#bucket_prefix}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

The directory path in the virtual file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#directory StorageFtpUser#directory}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

The access level for the directory.

For read-only access, set this value to READ_ONLY. For read and write access, set this value to READ_WRITE. Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#permission StorageFtpUser#permission}

---

### StorageFtpUserTimeouts <a name="StorageFtpUserTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserTimeouts;

StorageFtpUserTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}.

---

### StorageFtpUserUserCredentials <a name="StorageFtpUserUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserUserCredentials;

StorageFtpUserUserCredentials.builder()
//  .credentialName(java.lang.String)
//  .credentialType(java.lang.String)
//  .sshPublicKeyBody(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | The name of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | The type of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody">sshPublicKeyBody</a></code> | <code>java.lang.String</code> | The SSH public key body. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

The name of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_name StorageFtpUser#credential_name}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

The type of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_type StorageFtpUser#credential_type}

---

##### `sshPublicKeyBody`<sup>Optional</sup> <a name="sshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody"></a>

```java
public java.lang.String getSshPublicKeyBody();
```

- *Type:* java.lang.String

The SSH public key body.

A file either absolute or relative path should be provided which contains the ssh public key using file() interpolation in Terraform, not recommended to have key as a literal string in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#ssh_public_key_body StorageFtpUser#ssh_public_key_body}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpUserStorageDirectoryMappingsList <a name="StorageFtpUserStorageDirectoryMappingsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserStorageDirectoryMappingsList;

new StorageFtpUserStorageDirectoryMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get"></a>

```java
public StorageFtpUserStorageDirectoryMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StorageFtpUserStorageDirectoryMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>>

---


### StorageFtpUserStorageDirectoryMappingsOutputReference <a name="StorageFtpUserStorageDirectoryMappingsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserStorageDirectoryMappingsOutputReference;

new StorageFtpUserStorageDirectoryMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix"></a>

```java
public void resetBucketPrefix()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput"></a>

```java
public java.lang.String getBucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageFtpUserStorageDirectoryMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>

---


### StorageFtpUserTimeoutsOutputReference <a name="StorageFtpUserTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserTimeoutsOutputReference;

new StorageFtpUserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageFtpUserTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---


### StorageFtpUserUserCredentialsList <a name="StorageFtpUserUserCredentialsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserUserCredentialsList;

new StorageFtpUserUserCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get"></a>

```java
public StorageFtpUserUserCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StorageFtpUserUserCredentials> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>>

---


### StorageFtpUserUserCredentialsOutputReference <a name="StorageFtpUserUserCredentialsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_ftp_user.StorageFtpUserUserCredentialsOutputReference;

new StorageFtpUserUserCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody">resetSshPublicKeyBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName"></a>

```java
public void resetCredentialName()
```

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType"></a>

```java
public void resetCredentialType()
```

##### `resetSshPublicKeyBody` <a name="resetSshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody"></a>

```java
public void resetSshPublicKeyBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput">sshPublicKeyBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody">sshPublicKeyBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput"></a>

```java
public java.lang.String getCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyBodyInput`<sup>Optional</sup> <a name="sshPublicKeyBodyInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput"></a>

```java
public java.lang.String getSshPublicKeyBodyInput();
```

- *Type:* java.lang.String

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyBody`<sup>Required</sup> <a name="sshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody"></a>

```java
public java.lang.String getSshPublicKeyBody();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageFtpUserUserCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>

---



