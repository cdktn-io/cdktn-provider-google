# `computeRegionNetworkFirewallPolicyIamBinding` Submodule <a name="`computeRegionNetworkFirewallPolicyIamBinding` Submodule" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicyIamBinding <a name="ComputeRegionNetworkFirewallPolicyIamBinding" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding google_compute_region_network_firewall_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_network_firewall_policy_iam_binding.ComputeRegionNetworkFirewallPolicyIamBinding;

ComputeRegionNetworkFirewallPolicyIamBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .members(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .role(java.lang.String)
//  .condition(ComputeRegionNetworkFirewallPolicyIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#members ComputeRegionNetworkFirewallPolicyIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#name ComputeRegionNetworkFirewallPolicyIamBinding#name}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#role ComputeRegionNetworkFirewallPolicyIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#id ComputeRegionNetworkFirewallPolicyIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#project ComputeRegionNetworkFirewallPolicyIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#region ComputeRegionNetworkFirewallPolicyIamBinding#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#members ComputeRegionNetworkFirewallPolicyIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#name ComputeRegionNetworkFirewallPolicyIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#role ComputeRegionNetworkFirewallPolicyIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#condition ComputeRegionNetworkFirewallPolicyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#id ComputeRegionNetworkFirewallPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#project ComputeRegionNetworkFirewallPolicyIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#region ComputeRegionNetworkFirewallPolicyIamBinding#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.putCondition"></a>

```java
public void putCondition(ComputeRegionNetworkFirewallPolicyIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_region_network_firewall_policy_iam_binding.ComputeRegionNetworkFirewallPolicyIamBinding;

ComputeRegionNetworkFirewallPolicyIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_region_network_firewall_policy_iam_binding.ComputeRegionNetworkFirewallPolicyIamBinding;

ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_region_network_firewall_policy_iam_binding.ComputeRegionNetworkFirewallPolicyIamBinding;

ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_region_network_firewall_policy_iam_binding.ComputeRegionNetworkFirewallPolicyIamBinding;

ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeRegionNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionNetworkFirewallPolicyIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionNetworkFirewallPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkFirewallPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference">ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.condition"></a>

```java
public ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference">ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.conditionInput"></a>

```java
public ComputeRegionNetworkFirewallPolicyIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyIamBindingCondition <a name="ComputeRegionNetworkFirewallPolicyIamBindingCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_network_firewall_policy_iam_binding.ComputeRegionNetworkFirewallPolicyIamBindingCondition;

ComputeRegionNetworkFirewallPolicyIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#expression ComputeRegionNetworkFirewallPolicyIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#title ComputeRegionNetworkFirewallPolicyIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#description ComputeRegionNetworkFirewallPolicyIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#expression ComputeRegionNetworkFirewallPolicyIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#title ComputeRegionNetworkFirewallPolicyIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#description ComputeRegionNetworkFirewallPolicyIamBinding#description}.

---

### ComputeRegionNetworkFirewallPolicyIamBindingConfig <a name="ComputeRegionNetworkFirewallPolicyIamBindingConfig" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_network_firewall_policy_iam_binding.ComputeRegionNetworkFirewallPolicyIamBindingConfig;

ComputeRegionNetworkFirewallPolicyIamBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .members(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .role(java.lang.String)
//  .condition(ComputeRegionNetworkFirewallPolicyIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#members ComputeRegionNetworkFirewallPolicyIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#name ComputeRegionNetworkFirewallPolicyIamBinding#name}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#role ComputeRegionNetworkFirewallPolicyIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#id ComputeRegionNetworkFirewallPolicyIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#project ComputeRegionNetworkFirewallPolicyIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#region ComputeRegionNetworkFirewallPolicyIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#members ComputeRegionNetworkFirewallPolicyIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#name ComputeRegionNetworkFirewallPolicyIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#role ComputeRegionNetworkFirewallPolicyIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.condition"></a>

```java
public ComputeRegionNetworkFirewallPolicyIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#condition ComputeRegionNetworkFirewallPolicyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#id ComputeRegionNetworkFirewallPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#project ComputeRegionNetworkFirewallPolicyIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_network_firewall_policy_iam_binding#region ComputeRegionNetworkFirewallPolicyIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference <a name="ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_network_firewall_policy_iam_binding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference;

new ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```java
public ComputeRegionNetworkFirewallPolicyIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

---



