# `computeInstanceGroupMembership` Submodule <a name="`computeInstanceGroupMembership` Submodule" id="@cdktn/provider-google.computeInstanceGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceGroupMembership <a name="ComputeInstanceGroupMembership" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership google_compute_instance_group_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer"></a>

```java
import io.cdktn.providers.google.compute_instance_group_membership.ComputeInstanceGroupMembership;

ComputeInstanceGroupMembership.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .instanceGroup(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeInstanceGroupMembershipTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | An instance being added to the InstanceGroup. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.instanceGroup">instanceGroup</a></code> | <code>java.lang.String</code> | Represents an Instance Group resource name that the instance belongs to. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#id ComputeInstanceGroupMembership#id}. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#project ComputeInstanceGroupMembership#project}. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the instance group resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

An instance being added to the InstanceGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#instance ComputeInstanceGroupMembership#instance}

---

##### `instanceGroup`<sup>Required</sup> <a name="instanceGroup" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.instanceGroup"></a>

- *Type:* java.lang.String

Represents an Instance Group resource name that the instance belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#instance_group ComputeInstanceGroupMembership#instance_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#id ComputeInstanceGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#project ComputeInstanceGroupMembership#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#timeouts ComputeInstanceGroupMembership#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

A reference to the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#zone ComputeInstanceGroupMembership#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.putTimeouts"></a>

```java
public void putTimeouts(ComputeInstanceGroupMembershipTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeInstanceGroupMembership resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_instance_group_membership.ComputeInstanceGroupMembership;

ComputeInstanceGroupMembership.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_instance_group_membership.ComputeInstanceGroupMembership;

ComputeInstanceGroupMembership.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_instance_group_membership.ComputeInstanceGroupMembership;

ComputeInstanceGroupMembership.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_instance_group_membership.ComputeInstanceGroupMembership;

ComputeInstanceGroupMembership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeInstanceGroupMembership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeInstanceGroupMembership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeInstanceGroupMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeInstanceGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeInstanceGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference">ComputeInstanceGroupMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceGroupInput">instanceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceGroup">instanceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.timeouts"></a>

```java
public ComputeInstanceGroupMembershipTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference">ComputeInstanceGroupMembershipTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceGroupInput`<sup>Optional</sup> <a name="instanceGroupInput" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceGroupInput"></a>

```java
public java.lang.String getInstanceGroupInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.timeoutsInput"></a>

```java
public IResolvable|ComputeInstanceGroupMembershipTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `instanceGroup`<sup>Required</sup> <a name="instanceGroup" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceGroup"></a>

```java
public java.lang.String getInstanceGroup();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceGroupMembershipConfig <a name="ComputeInstanceGroupMembershipConfig" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_instance_group_membership.ComputeInstanceGroupMembershipConfig;

ComputeInstanceGroupMembershipConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .instanceGroup(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeInstanceGroupMembershipTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | An instance being added to the InstanceGroup. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.instanceGroup">instanceGroup</a></code> | <code>java.lang.String</code> | Represents an Instance Group resource name that the instance belongs to. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#id ComputeInstanceGroupMembership#id}. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#project ComputeInstanceGroupMembership#project}. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the instance group resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

An instance being added to the InstanceGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#instance ComputeInstanceGroupMembership#instance}

---

##### `instanceGroup`<sup>Required</sup> <a name="instanceGroup" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.instanceGroup"></a>

```java
public java.lang.String getInstanceGroup();
```

- *Type:* java.lang.String

Represents an Instance Group resource name that the instance belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#instance_group ComputeInstanceGroupMembership#instance_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#id ComputeInstanceGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#project ComputeInstanceGroupMembership#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.timeouts"></a>

```java
public ComputeInstanceGroupMembershipTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#timeouts ComputeInstanceGroupMembership#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

A reference to the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#zone ComputeInstanceGroupMembership#zone}

---

### ComputeInstanceGroupMembershipTimeouts <a name="ComputeInstanceGroupMembershipTimeouts" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_instance_group_membership.ComputeInstanceGroupMembershipTimeouts;

ComputeInstanceGroupMembershipTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#create ComputeInstanceGroupMembership#create}. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#delete ComputeInstanceGroupMembership#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#create ComputeInstanceGroupMembership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_instance_group_membership#delete ComputeInstanceGroupMembership#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceGroupMembershipTimeoutsOutputReference <a name="ComputeInstanceGroupMembershipTimeoutsOutputReference" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_instance_group_membership.ComputeInstanceGroupMembershipTimeoutsOutputReference;

new ComputeInstanceGroupMembershipTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeInstanceGroupMembershipTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>

---



