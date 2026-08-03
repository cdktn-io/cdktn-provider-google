# `computeRegionResizeRequest` Submodule <a name="`computeRegionResizeRequest` Submodule" id="@cdktn/provider-google.computeRegionResizeRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionResizeRequest <a name="ComputeRegionResizeRequest" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request google_compute_region_resize_request}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequest;

ComputeRegionResizeRequest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceGroupManager(java.lang.String)
    .name(java.lang.String)
    .resizeBy(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .requestedRunDuration(ComputeRegionResizeRequestRequestedRunDuration)
//  .timeouts(ComputeRegionResizeRequestTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | The reference of the regional instance group manager this ResizeRequest is a part of. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.resizeBy">resizeBy</a></code> | <code>java.lang.Number</code> | The number of instances to be created by this resize request. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resize-request. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#id ComputeRegionResizeRequest#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#project ComputeRegionResizeRequest#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The reference of the compute region scoping this request. If it is not provided, the provider region is used. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.requestedRunDuration">requestedRunDuration</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a></code> | requested_run_duration block. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.instanceGroupManager"></a>

- *Type:* java.lang.String

The reference of the regional instance group manager this ResizeRequest is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#instance_group_manager ComputeRegionResizeRequest#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#name ComputeRegionResizeRequest#name}

---

##### `resizeBy`<sup>Required</sup> <a name="resizeBy" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.resizeBy"></a>

- *Type:* java.lang.Number

The number of instances to be created by this resize request.

The group's target size will be increased by this number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#resize_by ComputeRegionResizeRequest#resize_by}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#deletion_policy ComputeRegionResizeRequest#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resize-request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#description ComputeRegionResizeRequest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#id ComputeRegionResizeRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#project ComputeRegionResizeRequest#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The reference of the compute region scoping this request. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#region ComputeRegionResizeRequest#region}

---

##### `requestedRunDuration`<sup>Optional</sup> <a name="requestedRunDuration" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.requestedRunDuration"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a>

requested_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#requested_run_duration ComputeRegionResizeRequest#requested_run_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#timeouts ComputeRegionResizeRequest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.putRequestedRunDuration">putRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetRequestedRunDuration">resetRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequestedRunDuration` <a name="putRequestedRunDuration" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.putRequestedRunDuration"></a>

```java
public void putRequestedRunDuration(ComputeRegionResizeRequestRequestedRunDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.putRequestedRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionResizeRequestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRequestedRunDuration` <a name="resetRequestedRunDuration" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetRequestedRunDuration"></a>

```java
public void resetRequestedRunDuration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionResizeRequest resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequest;

ComputeRegionResizeRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequest;

ComputeRegionResizeRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequest;

ComputeRegionResizeRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequest;

ComputeRegionResizeRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionResizeRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeRegionResizeRequest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionResizeRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionResizeRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionResizeRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.requestedRunDuration">requestedRunDuration</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference">ComputeRegionResizeRequestRequestedRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.status">status</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList">ComputeRegionResizeRequestStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference">ComputeRegionResizeRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.instanceGroupManagerInput">instanceGroupManagerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.requestedRunDurationInput">requestedRunDurationInput</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.resizeByInput">resizeByInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.resizeBy">resizeBy</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `requestedRunDuration`<sup>Required</sup> <a name="requestedRunDuration" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.requestedRunDuration"></a>

```java
public ComputeRegionResizeRequestRequestedRunDurationOutputReference getRequestedRunDuration();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference">ComputeRegionResizeRequestRequestedRunDurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.status"></a>

```java
public ComputeRegionResizeRequestStatusList getStatus();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList">ComputeRegionResizeRequestStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.timeouts"></a>

```java
public ComputeRegionResizeRequestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference">ComputeRegionResizeRequestTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceGroupManagerInput`<sup>Optional</sup> <a name="instanceGroupManagerInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.instanceGroupManagerInput"></a>

```java
public java.lang.String getInstanceGroupManagerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `requestedRunDurationInput`<sup>Optional</sup> <a name="requestedRunDurationInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.requestedRunDurationInput"></a>

```java
public ComputeRegionResizeRequestRequestedRunDuration getRequestedRunDurationInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a>

---

##### `resizeByInput`<sup>Optional</sup> <a name="resizeByInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.resizeByInput"></a>

```java
public java.lang.Number getResizeByInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.timeoutsInput"></a>

```java
public IResolvable|ComputeRegionResizeRequestTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.instanceGroupManager"></a>

```java
public java.lang.String getInstanceGroupManager();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resizeBy`<sup>Required</sup> <a name="resizeBy" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.resizeBy"></a>

```java
public java.lang.Number getResizeBy();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionResizeRequestConfig <a name="ComputeRegionResizeRequestConfig" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestConfig;

ComputeRegionResizeRequestConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceGroupManager(java.lang.String)
    .name(java.lang.String)
    .resizeBy(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .requestedRunDuration(ComputeRegionResizeRequestRequestedRunDuration)
//  .timeouts(ComputeRegionResizeRequestTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | The reference of the regional instance group manager this ResizeRequest is a part of. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.resizeBy">resizeBy</a></code> | <code>java.lang.Number</code> | The number of instances to be created by this resize request. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resize-request. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#id ComputeRegionResizeRequest#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#project ComputeRegionResizeRequest#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.region">region</a></code> | <code>java.lang.String</code> | The reference of the compute region scoping this request. If it is not provided, the provider region is used. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.requestedRunDuration">requestedRunDuration</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a></code> | requested_run_duration block. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.instanceGroupManager"></a>

```java
public java.lang.String getInstanceGroupManager();
```

- *Type:* java.lang.String

The reference of the regional instance group manager this ResizeRequest is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#instance_group_manager ComputeRegionResizeRequest#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#name ComputeRegionResizeRequest#name}

---

##### `resizeBy`<sup>Required</sup> <a name="resizeBy" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.resizeBy"></a>

```java
public java.lang.Number getResizeBy();
```

- *Type:* java.lang.Number

The number of instances to be created by this resize request.

The group's target size will be increased by this number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#resize_by ComputeRegionResizeRequest#resize_by}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#deletion_policy ComputeRegionResizeRequest#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resize-request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#description ComputeRegionResizeRequest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#id ComputeRegionResizeRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#project ComputeRegionResizeRequest#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The reference of the compute region scoping this request. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#region ComputeRegionResizeRequest#region}

---

##### `requestedRunDuration`<sup>Optional</sup> <a name="requestedRunDuration" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.requestedRunDuration"></a>

```java
public ComputeRegionResizeRequestRequestedRunDuration getRequestedRunDuration();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a>

requested_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#requested_run_duration ComputeRegionResizeRequest#requested_run_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestConfig.property.timeouts"></a>

```java
public ComputeRegionResizeRequestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#timeouts ComputeRegionResizeRequest#timeouts}

---

### ComputeRegionResizeRequestRequestedRunDuration <a name="ComputeRegionResizeRequestRequestedRunDuration" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestRequestedRunDuration;

ComputeRegionResizeRequestRequestedRunDuration.builder()
    .seconds(java.lang.String)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration.property.seconds">seconds</a></code> | <code>java.lang.String</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

Span of time at a resolution of a second.

Must be from 600 to 604800 inclusive. Note: minimum and maximum allowed range for requestedRunDuration is 10 minutes (600 seconds) and 7 days(604800 seconds) correspondingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#seconds ComputeRegionResizeRequest#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#nanos ComputeRegionResizeRequest#nanos}

---

### ComputeRegionResizeRequestStatus <a name="ComputeRegionResizeRequestStatus" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatus.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatus;

ComputeRegionResizeRequestStatus.builder()
    .build();
```


### ComputeRegionResizeRequestStatusError <a name="ComputeRegionResizeRequestStatusError" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusError.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusError;

ComputeRegionResizeRequestStatusError.builder()
    .build();
```


### ComputeRegionResizeRequestStatusErrorErrors <a name="ComputeRegionResizeRequestStatusErrorErrors" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrors.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrors;

ComputeRegionResizeRequestStatusErrorErrors.builder()
    .build();
```


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetails <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetails" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetails.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetails;

ComputeRegionResizeRequestStatusErrorErrorsErrorDetails.builder()
    .build();
```


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo;

ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo.builder()
    .build();
```


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp;

ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp.builder()
    .build();
```


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks;

ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks.builder()
    .build();
```


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage;

ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage.builder()
    .build();
```


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo;

ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttempt <a name="ComputeRegionResizeRequestStatusLastAttempt" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttempt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttempt.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttempt;

ComputeRegionResizeRequestStatusLastAttempt.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttemptError <a name="ComputeRegionResizeRequestStatusLastAttemptError" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptError.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptError;

ComputeRegionResizeRequestStatusLastAttemptError.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttemptErrorErrors <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrors" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrors.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrors;

ComputeRegionResizeRequestStatusLastAttemptErrorErrors.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails;

ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo;

ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp;

ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks;

ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage;

ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage.builder()
    .build();
```


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo;

ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo.builder()
    .build();
```


### ComputeRegionResizeRequestTimeouts <a name="ComputeRegionResizeRequestTimeouts" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestTimeouts;

ComputeRegionResizeRequestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#create ComputeRegionResizeRequest#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#delete ComputeRegionResizeRequest#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#create ComputeRegionResizeRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_resize_request#delete ComputeRegionResizeRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionResizeRequestRequestedRunDurationOutputReference <a name="ComputeRegionResizeRequestRequestedRunDurationOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestRequestedRunDurationOutputReference;

new ComputeRegionResizeRequestRequestedRunDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.secondsInput"></a>

```java
public java.lang.String getSecondsInput();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDurationOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestRequestedRunDuration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestRequestedRunDuration">ComputeRegionResizeRequestRequestedRunDuration</a>

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">metadatas</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `metadatas`<sup>Required</sup> <a name="metadatas" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```java
public StringMap getMetadatas();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a>

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a>

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.get"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links">links</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList getLinks();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp</a>

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.get"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a>

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help">help</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage">localizedMessage</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo">quotaInfo</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetails">ComputeRegionResizeRequestStatusErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList getErrorInfo();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList getHelp();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList</a>

---

##### `localizedMessage`<sup>Required</sup> <a name="localizedMessage" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList getLocalizedMessage();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `quotaInfo`<sup>Required</sup> <a name="quotaInfo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList getQuotaInfo();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetails">ComputeRegionResizeRequestStatusErrorErrorsErrorDetails</a>

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference;

new ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">dimensions</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">futureLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">limitName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">rolloutStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```java
public StringMap getDimensions();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `futureLimit`<sup>Required</sup> <a name="futureLimit" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```java
public java.lang.Number getFutureLimit();
```

- *Type:* java.lang.Number

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```java
public java.lang.String getLimitName();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `rolloutStatus`<sup>Required</sup> <a name="rolloutStatus" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```java
public java.lang.String getRolloutStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a>

---


### ComputeRegionResizeRequestStatusErrorErrorsList <a name="ComputeRegionResizeRequestStatusErrorErrorsList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsList;

new ComputeRegionResizeRequestStatusErrorErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.get"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusErrorErrorsOutputReference <a name="ComputeRegionResizeRequestStatusErrorErrorsOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorErrorsOutputReference;

new ComputeRegionResizeRequestStatusErrorErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrors">ComputeRegionResizeRequestStatusErrorErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.errorDetails"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList getErrorDetails();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList">ComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrors">ComputeRegionResizeRequestStatusErrorErrors</a>

---


### ComputeRegionResizeRequestStatusErrorList <a name="ComputeRegionResizeRequestStatusErrorList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorList;

new ComputeRegionResizeRequestStatusErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.get"></a>

```java
public ComputeRegionResizeRequestStatusErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusErrorOutputReference <a name="ComputeRegionResizeRequestStatusErrorOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusErrorOutputReference;

new ComputeRegionResizeRequestStatusErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList">ComputeRegionResizeRequestStatusErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusError">ComputeRegionResizeRequestStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.property.errors"></a>

```java
public ComputeRegionResizeRequestStatusErrorErrorsList getErrors();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorErrorsList">ComputeRegionResizeRequestStatusErrorErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusError">ComputeRegionResizeRequestStatusError</a>

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">metadatas</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `metadatas`<sup>Required</sup> <a name="metadatas" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```java
public StringMap getMetadatas();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a>

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a>

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links">links</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList getLinks();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a>

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a>

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help">help</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage">localizedMessage</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo">quotaInfo</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList getErrorInfo();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList getHelp();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a>

---

##### `localizedMessage`<sup>Required</sup> <a name="localizedMessage" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList getLocalizedMessage();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `quotaInfo`<sup>Required</sup> <a name="quotaInfo" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList getQuotaInfo();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a>

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">dimensions</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">futureLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">limitName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">rolloutStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```java
public StringMap getDimensions();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `futureLimit`<sup>Required</sup> <a name="futureLimit" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```java
public java.lang.Number getFutureLimit();
```

- *Type:* java.lang.Number

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```java
public java.lang.String getLimitName();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `rolloutStatus`<sup>Required</sup> <a name="rolloutStatus" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```java
public java.lang.String getRolloutStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a>

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrors">ComputeRegionResizeRequestStatusLastAttemptErrorErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList getErrorDetails();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrors">ComputeRegionResizeRequestStatusLastAttemptErrorErrors</a>

---


### ComputeRegionResizeRequestStatusLastAttemptErrorList <a name="ComputeRegionResizeRequestStatusLastAttemptErrorList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorList;

new ComputeRegionResizeRequestStatusLastAttemptErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptError">ComputeRegionResizeRequestStatusLastAttemptError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.errors"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList getErrors();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList">ComputeRegionResizeRequestStatusLastAttemptErrorErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptError">ComputeRegionResizeRequestStatusLastAttemptError</a>

---


### ComputeRegionResizeRequestStatusLastAttemptList <a name="ComputeRegionResizeRequestStatusLastAttemptList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptList;

new ComputeRegionResizeRequestStatusLastAttemptList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.get"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusLastAttemptOutputReference <a name="ComputeRegionResizeRequestStatusLastAttemptOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusLastAttemptOutputReference;

new ComputeRegionResizeRequestStatusLastAttemptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList">ComputeRegionResizeRequestStatusLastAttemptErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttempt">ComputeRegionResizeRequestStatusLastAttempt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.property.error"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptErrorList">ComputeRegionResizeRequestStatusLastAttemptErrorList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatusLastAttempt getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttempt">ComputeRegionResizeRequestStatusLastAttempt</a>

---


### ComputeRegionResizeRequestStatusList <a name="ComputeRegionResizeRequestStatusList" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusList;

new ComputeRegionResizeRequestStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.get"></a>

```java
public ComputeRegionResizeRequestStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeRegionResizeRequestStatusOutputReference <a name="ComputeRegionResizeRequestStatusOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestStatusOutputReference;

new ComputeRegionResizeRequestStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList">ComputeRegionResizeRequestStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.lastAttempt">lastAttempt</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList">ComputeRegionResizeRequestStatusLastAttemptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatus">ComputeRegionResizeRequestStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.error"></a>

```java
public ComputeRegionResizeRequestStatusErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusErrorList">ComputeRegionResizeRequestStatusErrorList</a>

---

##### `lastAttempt`<sup>Required</sup> <a name="lastAttempt" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.lastAttempt"></a>

```java
public ComputeRegionResizeRequestStatusLastAttemptList getLastAttempt();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusLastAttemptList">ComputeRegionResizeRequestStatusLastAttemptList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatusOutputReference.property.internalValue"></a>

```java
public ComputeRegionResizeRequestStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestStatus">ComputeRegionResizeRequestStatus</a>

---


### ComputeRegionResizeRequestTimeoutsOutputReference <a name="ComputeRegionResizeRequestTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_resize_request.ComputeRegionResizeRequestTimeoutsOutputReference;

new ComputeRegionResizeRequestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeRegionResizeRequestTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionResizeRequest.ComputeRegionResizeRequestTimeouts">ComputeRegionResizeRequestTimeouts</a>

---



