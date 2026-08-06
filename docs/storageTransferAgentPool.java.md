# `storageTransferAgentPool` Submodule <a name="`storageTransferAgentPool` Submodule" id="@cdktn/provider-google.storageTransferAgentPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageTransferAgentPool <a name="StorageTransferAgentPool" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool google_storage_transfer_agent_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPool;

StorageTransferAgentPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .bandwidthLimit(StorageTransferAgentPoolBandwidthLimit)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(StorageTransferAgentPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the agent pool to create. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.bandwidthLimit">bandwidthLimit</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | bandwidth_limit block. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Specifies the client-specified AgentPool description. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the agent pool to create.

The agentPoolId must meet the following requirements:

* Length of 128 characters or less.
* Not start with the string goog.
* Start with a lowercase ASCII character, followed by:

  * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
  * One or more numerals or lowercase ASCII characters.

As expressed by the regular expression: ^(?!goog)[a-z](%5Ba-z0-9-._~%5D*%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#name StorageTransferAgentPool#name}

---

##### `bandwidthLimit`<sup>Optional</sup> <a name="bandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.bandwidthLimit"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

bandwidth_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#bandwidth_limit StorageTransferAgentPool#bandwidth_limit}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#deletion_policy StorageTransferAgentPool#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Specifies the client-specified AgentPool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#display_name StorageTransferAgentPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#timeouts StorageTransferAgentPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit">putBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetBandwidthLimit">resetBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBandwidthLimit` <a name="putBandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit"></a>

```java
public void putBandwidthLimit(StorageTransferAgentPoolBandwidthLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts"></a>

```java
public void putTimeouts(StorageTransferAgentPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

---

##### `resetBandwidthLimit` <a name="resetBandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetBandwidthLimit"></a>

```java
public void resetBandwidthLimit()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageTransferAgentPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPool;

StorageTransferAgentPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPool;

StorageTransferAgentPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPool;

StorageTransferAgentPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPool;

StorageTransferAgentPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageTransferAgentPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StorageTransferAgentPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageTransferAgentPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageTransferAgentPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StorageTransferAgentPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimit">bandwidthLimit</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference">StorageTransferAgentPoolBandwidthLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference">StorageTransferAgentPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimitInput">bandwidthLimitInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bandwidthLimit`<sup>Required</sup> <a name="bandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimit"></a>

```java
public StorageTransferAgentPoolBandwidthLimitOutputReference getBandwidthLimit();
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference">StorageTransferAgentPoolBandwidthLimitOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeouts"></a>

```java
public StorageTransferAgentPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference">StorageTransferAgentPoolTimeoutsOutputReference</a>

---

##### `bandwidthLimitInput`<sup>Optional</sup> <a name="bandwidthLimitInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimitInput"></a>

```java
public StorageTransferAgentPoolBandwidthLimit getBandwidthLimitInput();
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeoutsInput"></a>

```java
public IResolvable|StorageTransferAgentPoolTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageTransferAgentPoolBandwidthLimit <a name="StorageTransferAgentPoolBandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.Initializer"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPoolBandwidthLimit;

StorageTransferAgentPoolBandwidthLimit.builder()
    .limitMbps(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.property.limitMbps">limitMbps</a></code> | <code>java.lang.String</code> | Bandwidth rate in megabytes per second, distributed across all the agents in the pool. |

---

##### `limitMbps`<sup>Required</sup> <a name="limitMbps" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.property.limitMbps"></a>

```java
public java.lang.String getLimitMbps();
```

- *Type:* java.lang.String

Bandwidth rate in megabytes per second, distributed across all the agents in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#limit_mbps StorageTransferAgentPool#limit_mbps}

---

### StorageTransferAgentPoolConfig <a name="StorageTransferAgentPoolConfig" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPoolConfig;

StorageTransferAgentPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .bandwidthLimit(StorageTransferAgentPoolBandwidthLimit)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(StorageTransferAgentPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the agent pool to create. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.bandwidthLimit">bandwidthLimit</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | bandwidth_limit block. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Specifies the client-specified AgentPool description. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the agent pool to create.

The agentPoolId must meet the following requirements:

* Length of 128 characters or less.
* Not start with the string goog.
* Start with a lowercase ASCII character, followed by:

  * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
  * One or more numerals or lowercase ASCII characters.

As expressed by the regular expression: ^(?!goog)[a-z](%5Ba-z0-9-._~%5D*%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#name StorageTransferAgentPool#name}

---

##### `bandwidthLimit`<sup>Optional</sup> <a name="bandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.bandwidthLimit"></a>

```java
public StorageTransferAgentPoolBandwidthLimit getBandwidthLimit();
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

bandwidth_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#bandwidth_limit StorageTransferAgentPool#bandwidth_limit}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#deletion_policy StorageTransferAgentPool#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Specifies the client-specified AgentPool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#display_name StorageTransferAgentPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.timeouts"></a>

```java
public StorageTransferAgentPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#timeouts StorageTransferAgentPool#timeouts}

---

### StorageTransferAgentPoolTimeouts <a name="StorageTransferAgentPoolTimeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPoolTimeouts;

StorageTransferAgentPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#create StorageTransferAgentPool#create}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#delete StorageTransferAgentPool#delete}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#update StorageTransferAgentPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#create StorageTransferAgentPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#delete StorageTransferAgentPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/storage_transfer_agent_pool#update StorageTransferAgentPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageTransferAgentPoolBandwidthLimitOutputReference <a name="StorageTransferAgentPoolBandwidthLimitOutputReference" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPoolBandwidthLimitOutputReference;

new StorageTransferAgentPoolBandwidthLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput">limitMbpsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps">limitMbps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitMbpsInput`<sup>Optional</sup> <a name="limitMbpsInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput"></a>

```java
public java.lang.String getLimitMbpsInput();
```

- *Type:* java.lang.String

---

##### `limitMbps`<sup>Required</sup> <a name="limitMbps" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps"></a>

```java
public java.lang.String getLimitMbps();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue"></a>

```java
public StorageTransferAgentPoolBandwidthLimit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

---


### StorageTransferAgentPoolTimeoutsOutputReference <a name="StorageTransferAgentPoolTimeoutsOutputReference" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.storage_transfer_agent_pool.StorageTransferAgentPoolTimeoutsOutputReference;

new StorageTransferAgentPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageTransferAgentPoolTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

---



