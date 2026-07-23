# `vmwareengineCluster` Submodule <a name="`vmwareengineCluster` Submodule" id="@cdktn/provider-google.vmwareengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineCluster <a name="VmwareengineCluster" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster google_vmwareengine_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineCluster;

VmwareengineCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .parent(java.lang.String)
//  .autoscalingSettings(VmwareengineClusterAutoscalingSettings)
//  .datastoreMountConfig(IResolvable|java.util.List<VmwareengineClusterDatastoreMountConfig>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .nodeTypeConfigs(IResolvable|java.util.List<VmwareengineClusterNodeTypeConfigs>)
//  .timeouts(VmwareengineClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the Cluster. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.autoscalingSettings">autoscalingSettings</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a></code> | autoscaling_settings block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.datastoreMountConfig">datastoreMountConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>></code> | datastore_mount_config block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>></code> | node_type_configs block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#name VmwareengineCluster#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#parent VmwareengineCluster#parent}

---

##### `autoscalingSettings`<sup>Optional</sup> <a name="autoscalingSettings" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.autoscalingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

autoscaling_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#autoscaling_settings VmwareengineCluster#autoscaling_settings}

---

##### `datastoreMountConfig`<sup>Optional</sup> <a name="datastoreMountConfig" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.datastoreMountConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>>

datastore_mount_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#datastore_mount_config VmwareengineCluster#datastore_mount_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#deletion_policy VmwareengineCluster#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeTypeConfigs`<sup>Optional</sup> <a name="nodeTypeConfigs" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.nodeTypeConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>>

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#node_type_configs VmwareengineCluster#node_type_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#timeouts VmwareengineCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings">putAutoscalingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putDatastoreMountConfig">putDatastoreMountConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putNodeTypeConfigs">putNodeTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetAutoscalingSettings">resetAutoscalingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetDatastoreMountConfig">resetDatastoreMountConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetNodeTypeConfigs">resetNodeTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingSettings` <a name="putAutoscalingSettings" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings"></a>

```java
public void putAutoscalingSettings(VmwareengineClusterAutoscalingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

---

##### `putDatastoreMountConfig` <a name="putDatastoreMountConfig" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putDatastoreMountConfig"></a>

```java
public void putDatastoreMountConfig(IResolvable|java.util.List<VmwareengineClusterDatastoreMountConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putDatastoreMountConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>>

---

##### `putNodeTypeConfigs` <a name="putNodeTypeConfigs" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putNodeTypeConfigs"></a>

```java
public void putNodeTypeConfigs(IResolvable|java.util.List<VmwareengineClusterNodeTypeConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putNodeTypeConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putTimeouts"></a>

```java
public void putTimeouts(VmwareengineClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>

---

##### `resetAutoscalingSettings` <a name="resetAutoscalingSettings" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetAutoscalingSettings"></a>

```java
public void resetAutoscalingSettings()
```

##### `resetDatastoreMountConfig` <a name="resetDatastoreMountConfig" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetDatastoreMountConfig"></a>

```java
public void resetDatastoreMountConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetId"></a>

```java
public void resetId()
```

##### `resetNodeTypeConfigs` <a name="resetNodeTypeConfigs" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetNodeTypeConfigs"></a>

```java
public void resetNodeTypeConfigs()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VmwareengineCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isConstruct"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineCluster;

VmwareengineCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineCluster;

VmwareengineCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineCluster;

VmwareengineCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineCluster;

VmwareengineCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VmwareengineCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VmwareengineCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VmwareengineCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VmwareengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VmwareengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.autoscalingSettings">autoscalingSettings</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference">VmwareengineClusterAutoscalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.datastoreMountConfig">datastoreMountConfig</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList">VmwareengineClusterDatastoreMountConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.management">management</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList">VmwareengineClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference">VmwareengineClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.autoscalingSettingsInput">autoscalingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.datastoreMountConfigInput">datastoreMountConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.nodeTypeConfigsInput">nodeTypeConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoscalingSettings`<sup>Required</sup> <a name="autoscalingSettings" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.autoscalingSettings"></a>

```java
public VmwareengineClusterAutoscalingSettingsOutputReference getAutoscalingSettings();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference">VmwareengineClusterAutoscalingSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `datastoreMountConfig`<sup>Required</sup> <a name="datastoreMountConfig" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.datastoreMountConfig"></a>

```java
public VmwareengineClusterDatastoreMountConfigList getDatastoreMountConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList">VmwareengineClusterDatastoreMountConfigList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.management"></a>

```java
public IResolvable getManagement();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `nodeTypeConfigs`<sup>Required</sup> <a name="nodeTypeConfigs" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.nodeTypeConfigs"></a>

```java
public VmwareengineClusterNodeTypeConfigsList getNodeTypeConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList">VmwareengineClusterNodeTypeConfigsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.timeouts"></a>

```java
public VmwareengineClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference">VmwareengineClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `autoscalingSettingsInput`<sup>Optional</sup> <a name="autoscalingSettingsInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.autoscalingSettingsInput"></a>

```java
public VmwareengineClusterAutoscalingSettings getAutoscalingSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

---

##### `datastoreMountConfigInput`<sup>Optional</sup> <a name="datastoreMountConfigInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.datastoreMountConfigInput"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterDatastoreMountConfig> getDatastoreMountConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeConfigsInput`<sup>Optional</sup> <a name="nodeTypeConfigsInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.nodeTypeConfigsInput"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterNodeTypeConfigs> getNodeTypeConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.timeoutsInput"></a>

```java
public IResolvable|VmwareengineClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineClusterAutoscalingSettings <a name="VmwareengineClusterAutoscalingSettings" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettings;

VmwareengineClusterAutoscalingSettings.builder()
    .autoscalingPolicies(IResolvable|java.util.List<VmwareengineClusterAutoscalingSettingsAutoscalingPolicies>)
//  .coolDownPeriod(java.lang.String)
//  .maxClusterNodeCount(java.lang.Number)
//  .minClusterNodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.autoscalingPolicies">autoscalingPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>></code> | autoscaling_policies block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.coolDownPeriod">coolDownPeriod</a></code> | <code>java.lang.String</code> | The minimum duration between consecutive autoscale operations. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.maxClusterNodeCount">maxClusterNodeCount</a></code> | <code>java.lang.Number</code> | Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.minClusterNodeCount">minClusterNodeCount</a></code> | <code>java.lang.Number</code> | Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster. |

---

##### `autoscalingPolicies`<sup>Required</sup> <a name="autoscalingPolicies" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.autoscalingPolicies"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterAutoscalingSettingsAutoscalingPolicies> getAutoscalingPolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>>

autoscaling_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#autoscaling_policies VmwareengineCluster#autoscaling_policies}

---

##### `coolDownPeriod`<sup>Optional</sup> <a name="coolDownPeriod" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.coolDownPeriod"></a>

```java
public java.lang.String getCoolDownPeriod();
```

- *Type:* java.lang.String

The minimum duration between consecutive autoscale operations.

It starts once addition or removal of nodes is fully completed.
Minimum cool down period is 30m.
Cool down period must be in whole minutes (for example, 30m, 31m, 50m).
Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#cool_down_period VmwareengineCluster#cool_down_period}

---

##### `maxClusterNodeCount`<sup>Optional</sup> <a name="maxClusterNodeCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.maxClusterNodeCount"></a>

```java
public java.lang.Number getMaxClusterNodeCount();
```

- *Type:* java.lang.Number

Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#max_cluster_node_count VmwareengineCluster#max_cluster_node_count}

---

##### `minClusterNodeCount`<sup>Optional</sup> <a name="minClusterNodeCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.minClusterNodeCount"></a>

```java
public java.lang.Number getMinClusterNodeCount();
```

- *Type:* java.lang.Number

Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#min_cluster_node_count VmwareengineCluster#min_cluster_node_count}

---

### VmwareengineClusterAutoscalingSettingsAutoscalingPolicies <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPolicies" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies;

VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.builder()
    .autoscalePolicyId(java.lang.String)
    .nodeTypeId(java.lang.String)
    .scaleOutSize(java.lang.Number)
//  .consumedMemoryThresholds(VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds)
//  .cpuThresholds(VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds)
//  .storageThresholds(VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.autoscalePolicyId">autoscalePolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#autoscale_policy_id VmwareengineCluster#autoscale_policy_id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | The canonical identifier of the node type to add or remove. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.scaleOutSize">scaleOutSize</a></code> | <code>java.lang.Number</code> | Number of nodes to add to a cluster during a scale-out operation. Must be divisible by 2 for stretched clusters. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.consumedMemoryThresholds">consumedMemoryThresholds</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | consumed_memory_thresholds block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.cpuThresholds">cpuThresholds</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | cpu_thresholds block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.storageThresholds">storageThresholds</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | storage_thresholds block. |

---

##### `autoscalePolicyId`<sup>Required</sup> <a name="autoscalePolicyId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.autoscalePolicyId"></a>

```java
public java.lang.String getAutoscalePolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#autoscale_policy_id VmwareengineCluster#autoscale_policy_id}.

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

The canonical identifier of the node type to add or remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#node_type_id VmwareengineCluster#node_type_id}

---

##### `scaleOutSize`<sup>Required</sup> <a name="scaleOutSize" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.scaleOutSize"></a>

```java
public java.lang.Number getScaleOutSize();
```

- *Type:* java.lang.Number

Number of nodes to add to a cluster during a scale-out operation. Must be divisible by 2 for stretched clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#scale_out_size VmwareengineCluster#scale_out_size}

---

##### `consumedMemoryThresholds`<sup>Optional</sup> <a name="consumedMemoryThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.consumedMemoryThresholds"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds getConsumedMemoryThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

consumed_memory_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#consumed_memory_thresholds VmwareengineCluster#consumed_memory_thresholds}

---

##### `cpuThresholds`<sup>Optional</sup> <a name="cpuThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.cpuThresholds"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds getCpuThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

cpu_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#cpu_thresholds VmwareengineCluster#cpu_thresholds}

---

##### `storageThresholds`<sup>Optional</sup> <a name="storageThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.storageThresholds"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds getStorageThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

storage_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#storage_thresholds VmwareengineCluster#storage_thresholds}

---

### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;

VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.builder()
    .scaleIn(java.lang.Number)
    .scaleOut(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleIn">scaleIn</a></code> | <code>java.lang.Number</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleOut">scaleOut</a></code> | <code>java.lang.Number</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleIn"></a>

```java
public java.lang.Number getScaleIn();
```

- *Type:* java.lang.Number

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleOut"></a>

```java
public java.lang.Number getScaleOut();
```

- *Type:* java.lang.Number

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;

VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.builder()
    .scaleIn(java.lang.Number)
    .scaleOut(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleIn">scaleIn</a></code> | <code>java.lang.Number</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleOut">scaleOut</a></code> | <code>java.lang.Number</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleIn"></a>

```java
public java.lang.Number getScaleIn();
```

- *Type:* java.lang.Number

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleOut"></a>

```java
public java.lang.Number getScaleOut();
```

- *Type:* java.lang.Number

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;

VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.builder()
    .scaleIn(java.lang.Number)
    .scaleOut(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleIn">scaleIn</a></code> | <code>java.lang.Number</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleOut">scaleOut</a></code> | <code>java.lang.Number</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleIn"></a>

```java
public java.lang.Number getScaleIn();
```

- *Type:* java.lang.Number

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleOut"></a>

```java
public java.lang.Number getScaleOut();
```

- *Type:* java.lang.Number

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

### VmwareengineClusterConfig <a name="VmwareengineClusterConfig" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterConfig;

VmwareengineClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .parent(java.lang.String)
//  .autoscalingSettings(VmwareengineClusterAutoscalingSettings)
//  .datastoreMountConfig(IResolvable|java.util.List<VmwareengineClusterDatastoreMountConfig>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .nodeTypeConfigs(IResolvable|java.util.List<VmwareengineClusterNodeTypeConfigs>)
//  .timeouts(VmwareengineClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the Cluster. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.autoscalingSettings">autoscalingSettings</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a></code> | autoscaling_settings block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.datastoreMountConfig">datastoreMountConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>></code> | datastore_mount_config block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>></code> | node_type_configs block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#name VmwareengineCluster#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#parent VmwareengineCluster#parent}

---

##### `autoscalingSettings`<sup>Optional</sup> <a name="autoscalingSettings" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.autoscalingSettings"></a>

```java
public VmwareengineClusterAutoscalingSettings getAutoscalingSettings();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

autoscaling_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#autoscaling_settings VmwareengineCluster#autoscaling_settings}

---

##### `datastoreMountConfig`<sup>Optional</sup> <a name="datastoreMountConfig" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.datastoreMountConfig"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterDatastoreMountConfig> getDatastoreMountConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>>

datastore_mount_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#datastore_mount_config VmwareengineCluster#datastore_mount_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#deletion_policy VmwareengineCluster#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeTypeConfigs`<sup>Optional</sup> <a name="nodeTypeConfigs" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.nodeTypeConfigs"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterNodeTypeConfigs> getNodeTypeConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>>

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#node_type_configs VmwareengineCluster#node_type_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.timeouts"></a>

```java
public VmwareengineClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#timeouts VmwareengineCluster#timeouts}

---

### VmwareengineClusterDatastoreMountConfig <a name="VmwareengineClusterDatastoreMountConfig" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterDatastoreMountConfig;

VmwareengineClusterDatastoreMountConfig.builder()
    .datastore(java.lang.String)
    .datastoreNetwork(VmwareengineClusterDatastoreMountConfigDatastoreNetwork)
//  .accessMode(java.lang.String)
//  .ignoreColocation(java.lang.Boolean|IResolvable)
//  .nfsVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.datastore">datastore</a></code> | <code>java.lang.String</code> | The resource name of the datastore to unmount. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.datastoreNetwork">datastoreNetwork</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork">VmwareengineClusterDatastoreMountConfigDatastoreNetwork</a></code> | datastore_network block. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | Optional. NFS is accessed by hosts in either read or read_write mode Default value used will be READ_WRITE Possible values: READ_ONLY READ_WRITE. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.ignoreColocation">ignoreColocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.nfsVersion">nfsVersion</a></code> | <code>java.lang.String</code> | Optional. The NFS protocol supported by the NFS volume. Default value used will be NFS_V3 Possible values: NFS_V3. |

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

The resource name of the datastore to unmount.

The datastore requested to be mounted should be in same region/zone as the
cluster.
Resource names are schemeless URIs that follow the conventions in
https://cloud.google.com/apis/design/resource_names.
For example:
'projects/my-project/locations/us-central1/datastores/my-datastore'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#datastore VmwareengineCluster#datastore}

---

##### `datastoreNetwork`<sup>Required</sup> <a name="datastoreNetwork" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.datastoreNetwork"></a>

```java
public VmwareengineClusterDatastoreMountConfigDatastoreNetwork getDatastoreNetwork();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork">VmwareengineClusterDatastoreMountConfigDatastoreNetwork</a>

datastore_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#datastore_network VmwareengineCluster#datastore_network}

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

Optional. NFS is accessed by hosts in either read or read_write mode Default value used will be READ_WRITE Possible values: READ_ONLY READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#access_mode VmwareengineCluster#access_mode}

---

##### `ignoreColocation`<sup>Optional</sup> <a name="ignoreColocation" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.ignoreColocation"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreColocation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional.

If set to true, the colocation requirement will be ignored.
If set to false, the colocation requirement will be enforced.
Colocation requirement is the requirement that the cluster must be in the
same region/zone of datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#ignore_colocation VmwareengineCluster#ignore_colocation}

---

##### `nfsVersion`<sup>Optional</sup> <a name="nfsVersion" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig.property.nfsVersion"></a>

```java
public java.lang.String getNfsVersion();
```

- *Type:* java.lang.String

Optional. The NFS protocol supported by the NFS volume. Default value used will be NFS_V3 Possible values: NFS_V3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#nfs_version VmwareengineCluster#nfs_version}

---

### VmwareengineClusterDatastoreMountConfigDatastoreNetwork <a name="VmwareengineClusterDatastoreMountConfigDatastoreNetwork" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork;

VmwareengineClusterDatastoreMountConfigDatastoreNetwork.builder()
    .subnet(java.lang.String)
//  .connectionCount(java.lang.Number)
//  .mtu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork.property.subnet">subnet</a></code> | <code>java.lang.String</code> | The resource name of the subnet Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. e.g. projects/my-project/locations/us-central1/subnets/my-subnet. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork.property.connectionCount">connectionCount</a></code> | <code>java.lang.Number</code> | Optional. The number of connections of the NFS volume. Supported from vsphere 8.0u1. Possible values are 1-4. Default value is 4. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

The resource name of the subnet Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. e.g. projects/my-project/locations/us-central1/subnets/my-subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#subnet VmwareengineCluster#subnet}

---

##### `connectionCount`<sup>Optional</sup> <a name="connectionCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork.property.connectionCount"></a>

```java
public java.lang.Number getConnectionCount();
```

- *Type:* java.lang.Number

Optional. The number of connections of the NFS volume. Supported from vsphere 8.0u1. Possible values are 1-4. Default value is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#connection_count VmwareengineCluster#connection_count}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Optional.

The Maximal Transmission Unit (MTU) of the datastore.
MTU value can range from 1330-9000. If not set, system sets
default MTU size to 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#mtu VmwareengineCluster#mtu}

---

### VmwareengineClusterNodeTypeConfigs <a name="VmwareengineClusterNodeTypeConfigs" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterNodeTypeConfigs;

VmwareengineClusterNodeTypeConfigs.builder()
    .nodeCount(java.lang.Number)
    .nodeTypeId(java.lang.String)
//  .customCoreCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes of this type in the cluster. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#node_type_id VmwareengineCluster#node_type_id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.customCoreCount">customCoreCount</a></code> | <code>java.lang.Number</code> | Customized number of cores available to each node of the type. |

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes of this type in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#node_count VmwareengineCluster#node_count}

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#node_type_id VmwareengineCluster#node_type_id}.

---

##### `customCoreCount`<sup>Optional</sup> <a name="customCoreCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.customCoreCount"></a>

```java
public java.lang.Number getCustomCoreCount();
```

- *Type:* java.lang.Number

Customized number of cores available to each node of the type.

This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
Once the customer is created then corecount cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#custom_core_count VmwareengineCluster#custom_core_count}

---

### VmwareengineClusterTimeouts <a name="VmwareengineClusterTimeouts" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterTimeouts;

VmwareengineClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#create VmwareengineCluster#create}. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#delete VmwareengineCluster#delete}. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#update VmwareengineCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#create VmwareengineCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#delete VmwareengineCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_cluster#update VmwareengineCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference;

new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleInInput">scaleInInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOutInput">scaleOutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleInInput`<sup>Optional</sup> <a name="scaleInInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleInInput"></a>

```java
public java.lang.Number getScaleInInput();
```

- *Type:* java.lang.Number

---

##### `scaleOutInput`<sup>Optional</sup> <a name="scaleOutInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOutInput"></a>

```java
public java.lang.Number getScaleOutInput();
```

- *Type:* java.lang.Number

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn"></a>

```java
public java.lang.Number getScaleIn();
```

- *Type:* java.lang.Number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut"></a>

```java
public java.lang.Number getScaleOut();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---


### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference;

new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleInInput">scaleInInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOutInput">scaleOutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleInInput`<sup>Optional</sup> <a name="scaleInInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleInInput"></a>

```java
public java.lang.Number getScaleInInput();
```

- *Type:* java.lang.Number

---

##### `scaleOutInput`<sup>Optional</sup> <a name="scaleOutInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOutInput"></a>

```java
public java.lang.Number getScaleOutInput();
```

- *Type:* java.lang.Number

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn"></a>

```java
public java.lang.Number getScaleIn();
```

- *Type:* java.lang.Number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut"></a>

```java
public java.lang.Number getScaleOut();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---


### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList;

new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterAutoscalingSettingsAutoscalingPolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>>

---


### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference;

new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds">putConsumedMemoryThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds">putCpuThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds">putStorageThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetConsumedMemoryThresholds">resetConsumedMemoryThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetCpuThresholds">resetCpuThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetStorageThresholds">resetStorageThresholds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumedMemoryThresholds` <a name="putConsumedMemoryThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds"></a>

```java
public void putConsumedMemoryThresholds(VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---

##### `putCpuThresholds` <a name="putCpuThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds"></a>

```java
public void putCpuThresholds(VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---

##### `putStorageThresholds` <a name="putStorageThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds"></a>

```java
public void putStorageThresholds(VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---

##### `resetConsumedMemoryThresholds` <a name="resetConsumedMemoryThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetConsumedMemoryThresholds"></a>

```java
public void resetConsumedMemoryThresholds()
```

##### `resetCpuThresholds` <a name="resetCpuThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetCpuThresholds"></a>

```java
public void resetCpuThresholds()
```

##### `resetStorageThresholds` <a name="resetStorageThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetStorageThresholds"></a>

```java
public void resetStorageThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds">consumedMemoryThresholds</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds">cpuThresholds</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds">storageThresholds</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyIdInput">autoscalePolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholdsInput">consumedMemoryThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholdsInput">cpuThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSizeInput">scaleOutSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholdsInput">storageThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId">autoscalePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize">scaleOutSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumedMemoryThresholds`<sup>Required</sup> <a name="consumedMemoryThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference getConsumedMemoryThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference</a>

---

##### `cpuThresholds`<sup>Required</sup> <a name="cpuThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference getCpuThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference</a>

---

##### `storageThresholds`<sup>Required</sup> <a name="storageThresholds" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference getStorageThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference</a>

---

##### `autoscalePolicyIdInput`<sup>Optional</sup> <a name="autoscalePolicyIdInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyIdInput"></a>

```java
public java.lang.String getAutoscalePolicyIdInput();
```

- *Type:* java.lang.String

---

##### `consumedMemoryThresholdsInput`<sup>Optional</sup> <a name="consumedMemoryThresholdsInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholdsInput"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds getConsumedMemoryThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---

##### `cpuThresholdsInput`<sup>Optional</sup> <a name="cpuThresholdsInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholdsInput"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds getCpuThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeIdInput"></a>

```java
public java.lang.String getNodeTypeIdInput();
```

- *Type:* java.lang.String

---

##### `scaleOutSizeInput`<sup>Optional</sup> <a name="scaleOutSizeInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSizeInput"></a>

```java
public java.lang.Number getScaleOutSizeInput();
```

- *Type:* java.lang.Number

---

##### `storageThresholdsInput`<sup>Optional</sup> <a name="storageThresholdsInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholdsInput"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds getStorageThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---

##### `autoscalePolicyId`<sup>Required</sup> <a name="autoscalePolicyId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId"></a>

```java
public java.lang.String getAutoscalePolicyId();
```

- *Type:* java.lang.String

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

---

##### `scaleOutSize`<sup>Required</sup> <a name="scaleOutSize" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize"></a>

```java
public java.lang.Number getScaleOutSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|VmwareengineClusterAutoscalingSettingsAutoscalingPolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>

---


### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference;

new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleInInput">scaleInInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOutInput">scaleOutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleInInput`<sup>Optional</sup> <a name="scaleInInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleInInput"></a>

```java
public java.lang.Number getScaleInInput();
```

- *Type:* java.lang.Number

---

##### `scaleOutInput`<sup>Optional</sup> <a name="scaleOutInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOutInput"></a>

```java
public java.lang.Number getScaleOutInput();
```

- *Type:* java.lang.Number

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn"></a>

```java
public java.lang.Number getScaleIn();
```

- *Type:* java.lang.Number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut"></a>

```java
public java.lang.Number getScaleOut();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---


### VmwareengineClusterAutoscalingSettingsOutputReference <a name="VmwareengineClusterAutoscalingSettingsOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterAutoscalingSettingsOutputReference;

new VmwareengineClusterAutoscalingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies">putAutoscalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetCoolDownPeriod">resetCoolDownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetMaxClusterNodeCount">resetMaxClusterNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetMinClusterNodeCount">resetMinClusterNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingPolicies` <a name="putAutoscalingPolicies" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies"></a>

```java
public void putAutoscalingPolicies(IResolvable|java.util.List<VmwareengineClusterAutoscalingSettingsAutoscalingPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>>

---

##### `resetCoolDownPeriod` <a name="resetCoolDownPeriod" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetCoolDownPeriod"></a>

```java
public void resetCoolDownPeriod()
```

##### `resetMaxClusterNodeCount` <a name="resetMaxClusterNodeCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetMaxClusterNodeCount"></a>

```java
public void resetMaxClusterNodeCount()
```

##### `resetMinClusterNodeCount` <a name="resetMinClusterNodeCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetMinClusterNodeCount"></a>

```java
public void resetMinClusterNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies">autoscalingPolicies</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPoliciesInput">autoscalingPoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriodInput">coolDownPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCountInput">maxClusterNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCountInput">minClusterNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod">coolDownPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount">maxClusterNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount">minClusterNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingPolicies`<sup>Required</sup> <a name="autoscalingPolicies" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies"></a>

```java
public VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList getAutoscalingPolicies();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a>

---

##### `autoscalingPoliciesInput`<sup>Optional</sup> <a name="autoscalingPoliciesInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPoliciesInput"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterAutoscalingSettingsAutoscalingPolicies> getAutoscalingPoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>>

---

##### `coolDownPeriodInput`<sup>Optional</sup> <a name="coolDownPeriodInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriodInput"></a>

```java
public java.lang.String getCoolDownPeriodInput();
```

- *Type:* java.lang.String

---

##### `maxClusterNodeCountInput`<sup>Optional</sup> <a name="maxClusterNodeCountInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCountInput"></a>

```java
public java.lang.Number getMaxClusterNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minClusterNodeCountInput`<sup>Optional</sup> <a name="minClusterNodeCountInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCountInput"></a>

```java
public java.lang.Number getMinClusterNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `coolDownPeriod`<sup>Required</sup> <a name="coolDownPeriod" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod"></a>

```java
public java.lang.String getCoolDownPeriod();
```

- *Type:* java.lang.String

---

##### `maxClusterNodeCount`<sup>Required</sup> <a name="maxClusterNodeCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount"></a>

```java
public java.lang.Number getMaxClusterNodeCount();
```

- *Type:* java.lang.Number

---

##### `minClusterNodeCount`<sup>Required</sup> <a name="minClusterNodeCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount"></a>

```java
public java.lang.Number getMinClusterNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue"></a>

```java
public VmwareengineClusterAutoscalingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

---


### VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference <a name="VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference;

new VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resetConnectionCount">resetConnectionCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resetMtu">resetMtu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionCount` <a name="resetConnectionCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resetConnectionCount"></a>

```java
public void resetConnectionCount()
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resetMtu"></a>

```java
public void resetMtu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.networkPeering">networkPeering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.connectionCountInput">connectionCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.connectionCount">connectionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork">VmwareengineClusterDatastoreMountConfigDatastoreNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkPeering`<sup>Required</sup> <a name="networkPeering" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.networkPeering"></a>

```java
public java.lang.String getNetworkPeering();
```

- *Type:* java.lang.String

---

##### `connectionCountInput`<sup>Optional</sup> <a name="connectionCountInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.connectionCountInput"></a>

```java
public java.lang.Number getConnectionCountInput();
```

- *Type:* java.lang.Number

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `connectionCount`<sup>Required</sup> <a name="connectionCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.connectionCount"></a>

```java
public java.lang.Number getConnectionCount();
```

- *Type:* java.lang.Number

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.internalValue"></a>

```java
public VmwareengineClusterDatastoreMountConfigDatastoreNetwork getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork">VmwareengineClusterDatastoreMountConfigDatastoreNetwork</a>

---


### VmwareengineClusterDatastoreMountConfigList <a name="VmwareengineClusterDatastoreMountConfigList" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterDatastoreMountConfigList;

new VmwareengineClusterDatastoreMountConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.get"></a>

```java
public VmwareengineClusterDatastoreMountConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterDatastoreMountConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>>

---


### VmwareengineClusterDatastoreMountConfigOutputReference <a name="VmwareengineClusterDatastoreMountConfigOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterDatastoreMountConfigOutputReference;

new VmwareengineClusterDatastoreMountConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.putDatastoreNetwork">putDatastoreNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resetAccessMode">resetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resetIgnoreColocation">resetIgnoreColocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resetNfsVersion">resetNfsVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatastoreNetwork` <a name="putDatastoreNetwork" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.putDatastoreNetwork"></a>

```java
public void putDatastoreNetwork(VmwareengineClusterDatastoreMountConfigDatastoreNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.putDatastoreNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork">VmwareengineClusterDatastoreMountConfigDatastoreNetwork</a>

---

##### `resetAccessMode` <a name="resetAccessMode" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resetAccessMode"></a>

```java
public void resetAccessMode()
```

##### `resetIgnoreColocation` <a name="resetIgnoreColocation" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resetIgnoreColocation"></a>

```java
public void resetIgnoreColocation()
```

##### `resetNfsVersion` <a name="resetNfsVersion" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.resetNfsVersion"></a>

```java
public void resetNfsVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.datastoreNetwork">datastoreNetwork</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference">VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.fileShare">fileShare</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.datastoreInput">datastoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.datastoreNetworkInput">datastoreNetworkInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork">VmwareengineClusterDatastoreMountConfigDatastoreNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.ignoreColocationInput">ignoreColocationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.nfsVersionInput">nfsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.datastore">datastore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.ignoreColocation">ignoreColocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.nfsVersion">nfsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datastoreNetwork`<sup>Required</sup> <a name="datastoreNetwork" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.datastoreNetwork"></a>

```java
public VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference getDatastoreNetwork();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference">VmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference</a>

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.fileShare"></a>

```java
public java.lang.String getFileShare();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.accessModeInput"></a>

```java
public java.lang.String getAccessModeInput();
```

- *Type:* java.lang.String

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.datastoreInput"></a>

```java
public java.lang.String getDatastoreInput();
```

- *Type:* java.lang.String

---

##### `datastoreNetworkInput`<sup>Optional</sup> <a name="datastoreNetworkInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.datastoreNetworkInput"></a>

```java
public VmwareengineClusterDatastoreMountConfigDatastoreNetwork getDatastoreNetworkInput();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigDatastoreNetwork">VmwareengineClusterDatastoreMountConfigDatastoreNetwork</a>

---

##### `ignoreColocationInput`<sup>Optional</sup> <a name="ignoreColocationInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.ignoreColocationInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreColocationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nfsVersionInput`<sup>Optional</sup> <a name="nfsVersionInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.nfsVersionInput"></a>

```java
public java.lang.String getNfsVersionInput();
```

- *Type:* java.lang.String

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

---

##### `ignoreColocation`<sup>Required</sup> <a name="ignoreColocation" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.ignoreColocation"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreColocation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nfsVersion`<sup>Required</sup> <a name="nfsVersion" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.nfsVersion"></a>

```java
public java.lang.String getNfsVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|VmwareengineClusterDatastoreMountConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterDatastoreMountConfig">VmwareengineClusterDatastoreMountConfig</a>

---


### VmwareengineClusterNodeTypeConfigsList <a name="VmwareengineClusterNodeTypeConfigsList" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterNodeTypeConfigsList;

new VmwareengineClusterNodeTypeConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.get"></a>

```java
public VmwareengineClusterNodeTypeConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VmwareengineClusterNodeTypeConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>>

---


### VmwareengineClusterNodeTypeConfigsOutputReference <a name="VmwareengineClusterNodeTypeConfigsOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterNodeTypeConfigsOutputReference;

new VmwareengineClusterNodeTypeConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resetCustomCoreCount">resetCustomCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomCoreCount` <a name="resetCustomCoreCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resetCustomCoreCount"></a>

```java
public void resetCustomCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCountInput">customCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount">customCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCoreCountInput`<sup>Optional</sup> <a name="customCoreCountInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCountInput"></a>

```java
public java.lang.Number getCustomCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput"></a>

```java
public java.lang.String getNodeTypeIdInput();
```

- *Type:* java.lang.String

---

##### `customCoreCount`<sup>Required</sup> <a name="customCoreCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```java
public java.lang.Number getCustomCoreCount();
```

- *Type:* java.lang.Number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|VmwareengineClusterNodeTypeConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>

---


### VmwareengineClusterTimeoutsOutputReference <a name="VmwareengineClusterTimeoutsOutputReference" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_cluster.VmwareengineClusterTimeoutsOutputReference;

new VmwareengineClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VmwareengineClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>

---



