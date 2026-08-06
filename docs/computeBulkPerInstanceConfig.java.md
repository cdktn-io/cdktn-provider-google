# `computeBulkPerInstanceConfig` Submodule <a name="`computeBulkPerInstanceConfig` Submodule" id="@cdktn/provider-google.computeBulkPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBulkPerInstanceConfig <a name="ComputeBulkPerInstanceConfig" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config google_compute_bulk_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfig;

ComputeBulkPerInstanceConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceGroupManager(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .instances(IResolvable|java.util.List<ComputeBulkPerInstanceConfigInstances>)
//  .project(java.lang.String)
//  .timeouts(ComputeBulkPerInstanceConfigTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.instances">instances</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>></code> | instances block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the containing instance group manager is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.instanceGroupManager"></a>

- *Type:* java.lang.String

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#instance_group_manager ComputeBulkPerInstanceConfig#instance_group_manager}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#deletion_policy ComputeBulkPerInstanceConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.instances"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>>

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#instances ComputeBulkPerInstanceConfig#instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#timeouts ComputeBulkPerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#zone ComputeBulkPerInstanceConfig#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances">putInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstances` <a name="putInstances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances"></a>

```java
public void putInstances(IResolvable|java.util.List<ComputeBulkPerInstanceConfigInstances> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts"></a>

```java
public void putTimeouts(ComputeBulkPerInstanceConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetId"></a>

```java
public void resetId()
```

##### `resetInstances` <a name="resetInstances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetInstances"></a>

```java
public void resetInstances()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfig;

ComputeBulkPerInstanceConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfig;

ComputeBulkPerInstanceConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfig;

ComputeBulkPerInstanceConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfig;

ComputeBulkPerInstanceConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeBulkPerInstanceConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeBulkPerInstanceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeBulkPerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeBulkPerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instances">instances</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList">ComputeBulkPerInstanceConfigInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference">ComputeBulkPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManagerInput">instanceGroupManagerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instancesInput">instancesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instances"></a>

```java
public ComputeBulkPerInstanceConfigInstancesList getInstances();
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList">ComputeBulkPerInstanceConfigInstancesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeouts"></a>

```java
public ComputeBulkPerInstanceConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference">ComputeBulkPerInstanceConfigTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceGroupManagerInput`<sup>Optional</sup> <a name="instanceGroupManagerInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManagerInput"></a>

```java
public java.lang.String getInstanceGroupManagerInput();
```

- *Type:* java.lang.String

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instancesInput"></a>

```java
public IResolvable|java.util.List<ComputeBulkPerInstanceConfigInstances> getInstancesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeoutsInput"></a>

```java
public IResolvable|ComputeBulkPerInstanceConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManager"></a>

```java
public java.lang.String getInstanceGroupManager();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBulkPerInstanceConfigConfig <a name="ComputeBulkPerInstanceConfigConfig" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfigConfig;

ComputeBulkPerInstanceConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceGroupManager(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .instances(IResolvable|java.util.List<ComputeBulkPerInstanceConfigInstances>)
//  .project(java.lang.String)
//  .timeouts(ComputeBulkPerInstanceConfigTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instances">instances</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>></code> | instances block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the containing instance group manager is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instanceGroupManager"></a>

```java
public java.lang.String getInstanceGroupManager();
```

- *Type:* java.lang.String

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#instance_group_manager ComputeBulkPerInstanceConfig#instance_group_manager}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#deletion_policy ComputeBulkPerInstanceConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instances"></a>

```java
public IResolvable|java.util.List<ComputeBulkPerInstanceConfigInstances> getInstances();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>>

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#instances ComputeBulkPerInstanceConfig#instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.timeouts"></a>

```java
public ComputeBulkPerInstanceConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#timeouts ComputeBulkPerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#zone ComputeBulkPerInstanceConfig#zone}

---

### ComputeBulkPerInstanceConfigInstances <a name="ComputeBulkPerInstanceConfigInstances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.Initializer"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfigInstances;

ComputeBulkPerInstanceConfigInstances.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.property.name">name</a></code> | <code>java.lang.String</code> | The name for this per-instance config and its corresponding instance. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#name ComputeBulkPerInstanceConfig#name}

---

### ComputeBulkPerInstanceConfigTimeouts <a name="ComputeBulkPerInstanceConfigTimeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfigTimeouts;

ComputeBulkPerInstanceConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#create ComputeBulkPerInstanceConfig#create}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#delete ComputeBulkPerInstanceConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#create ComputeBulkPerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_bulk_per_instance_config#delete ComputeBulkPerInstanceConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBulkPerInstanceConfigInstancesList <a name="ComputeBulkPerInstanceConfigInstancesList" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfigInstancesList;

new ComputeBulkPerInstanceConfigInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get"></a>

```java
public ComputeBulkPerInstanceConfigInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeBulkPerInstanceConfigInstances> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>>

---


### ComputeBulkPerInstanceConfigInstancesOutputReference <a name="ComputeBulkPerInstanceConfigInstancesOutputReference" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfigInstancesOutputReference;

new ComputeBulkPerInstanceConfigInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeBulkPerInstanceConfigInstances getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>

---


### ComputeBulkPerInstanceConfigTimeoutsOutputReference <a name="ComputeBulkPerInstanceConfigTimeoutsOutputReference" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_bulk_per_instance_config.ComputeBulkPerInstanceConfigTimeoutsOutputReference;

new ComputeBulkPerInstanceConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeBulkPerInstanceConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

---



