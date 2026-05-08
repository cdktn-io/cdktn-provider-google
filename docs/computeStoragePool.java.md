# `computeStoragePool` Submodule <a name="`computeStoragePool` Submodule" id="@cdktn/provider-google.computeStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStoragePool <a name="ComputeStoragePool" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool google_compute_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePool;

ComputeStoragePool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .poolProvisionedCapacityGb(java.lang.String)
    .poolProvisionedThroughput(java.lang.String)
    .storagePoolType(java.lang.String)
//  .capacityProvisioningType(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .params(ComputeStoragePoolParams)
//  .performanceProvisioningType(java.lang.String)
//  .poolProvisionedIops(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeStoragePoolTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>java.lang.String</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>java.lang.String</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.capacityProvisioningType">capacityProvisioningType</a></code> | <code>java.lang.String</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this storage pool. These can be later modified by the setLabels method. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.performanceProvisioningType">performanceProvisioningType</a></code> | <code>java.lang.String</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedIops">poolProvisionedIops</a></code> | <code>java.lang.String</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the storage pool resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#name ComputeStoragePool#name}

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedCapacityGb"></a>

- *Type:* java.lang.String

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#pool_provisioned_capacity_gb ComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedThroughput"></a>

- *Type:* java.lang.String

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#pool_provisioned_throughput ComputeStoragePool#pool_provisioned_throughput}

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.storagePoolType"></a>

- *Type:* java.lang.String

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#storage_pool_type ComputeStoragePool#storage_pool_type}

---

##### `capacityProvisioningType`<sup>Optional</sup> <a name="capacityProvisioningType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.capacityProvisioningType"></a>

- *Type:* java.lang.String

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#capacity_provisioning_type ComputeStoragePool#capacity_provisioning_type}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#deletion_protection ComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#description ComputeStoragePool#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this storage pool. These can be later modified by the setLabels method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#labels ComputeStoragePool#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#params ComputeStoragePool#params}

---

##### `performanceProvisioningType`<sup>Optional</sup> <a name="performanceProvisioningType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.performanceProvisioningType"></a>

- *Type:* java.lang.String

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#performance_provisioning_type ComputeStoragePool#performance_provisioning_type}

---

##### `poolProvisionedIops`<sup>Optional</sup> <a name="poolProvisionedIops" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedIops"></a>

- *Type:* java.lang.String

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#pool_provisioned_iops ComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#timeouts ComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#zone ComputeStoragePool#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetCapacityProvisioningType">resetCapacityProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetPerformanceProvisioningType">resetPerformanceProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetPoolProvisionedIops">resetPoolProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.putParams"></a>

```java
public void putParams(ComputeStoragePoolParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.putTimeouts"></a>

```java
public void putTimeouts(ComputeStoragePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>

---

##### `resetCapacityProvisioningType` <a name="resetCapacityProvisioningType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetCapacityProvisioningType"></a>

```java
public void resetCapacityProvisioningType()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetParams"></a>

```java
public void resetParams()
```

##### `resetPerformanceProvisioningType` <a name="resetPerformanceProvisioningType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetPerformanceProvisioningType"></a>

```java
public void resetPerformanceProvisioningType()
```

##### `resetPoolProvisionedIops` <a name="resetPoolProvisionedIops" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetPoolProvisionedIops"></a>

```java
public void resetPoolProvisionedIops()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeStoragePool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePool;

ComputeStoragePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePool;

ComputeStoragePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePool;

ComputeStoragePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePool;

ComputeStoragePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeStoragePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeStoragePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeStoragePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference">ComputeStoragePoolParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.resourceStatus">resourceStatus</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList">ComputeStoragePoolResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.status">status</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList">ComputeStoragePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference">ComputeStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.capacityProvisioningTypeInput">capacityProvisioningTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.performanceProvisioningTypeInput">performanceProvisioningTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedCapacityGbInput">poolProvisionedCapacityGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedIopsInput">poolProvisionedIopsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedThroughputInput">poolProvisionedThroughputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.storagePoolTypeInput">storagePoolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.capacityProvisioningType">capacityProvisioningType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.performanceProvisioningType">performanceProvisioningType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedIops">poolProvisionedIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.params"></a>

```java
public ComputeStoragePoolParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference">ComputeStoragePoolParamsOutputReference</a>

---

##### `resourceStatus`<sup>Required</sup> <a name="resourceStatus" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.resourceStatus"></a>

```java
public ComputeStoragePoolResourceStatusList getResourceStatus();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList">ComputeStoragePoolResourceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.status"></a>

```java
public ComputeStoragePoolStatusList getStatus();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList">ComputeStoragePoolStatusList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.timeouts"></a>

```java
public ComputeStoragePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference">ComputeStoragePoolTimeoutsOutputReference</a>

---

##### `capacityProvisioningTypeInput`<sup>Optional</sup> <a name="capacityProvisioningTypeInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.capacityProvisioningTypeInput"></a>

```java
public java.lang.String getCapacityProvisioningTypeInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.paramsInput"></a>

```java
public ComputeStoragePoolParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a>

---

##### `performanceProvisioningTypeInput`<sup>Optional</sup> <a name="performanceProvisioningTypeInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.performanceProvisioningTypeInput"></a>

```java
public java.lang.String getPerformanceProvisioningTypeInput();
```

- *Type:* java.lang.String

---

##### `poolProvisionedCapacityGbInput`<sup>Optional</sup> <a name="poolProvisionedCapacityGbInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedCapacityGbInput"></a>

```java
public java.lang.String getPoolProvisionedCapacityGbInput();
```

- *Type:* java.lang.String

---

##### `poolProvisionedIopsInput`<sup>Optional</sup> <a name="poolProvisionedIopsInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedIopsInput"></a>

```java
public java.lang.String getPoolProvisionedIopsInput();
```

- *Type:* java.lang.String

---

##### `poolProvisionedThroughputInput`<sup>Optional</sup> <a name="poolProvisionedThroughputInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedThroughputInput"></a>

```java
public java.lang.String getPoolProvisionedThroughputInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `storagePoolTypeInput`<sup>Optional</sup> <a name="storagePoolTypeInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.storagePoolTypeInput"></a>

```java
public java.lang.String getStoragePoolTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.timeoutsInput"></a>

```java
public IResolvable|ComputeStoragePoolTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `capacityProvisioningType`<sup>Required</sup> <a name="capacityProvisioningType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.capacityProvisioningType"></a>

```java
public java.lang.String getCapacityProvisioningType();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `performanceProvisioningType`<sup>Required</sup> <a name="performanceProvisioningType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.performanceProvisioningType"></a>

```java
public java.lang.String getPerformanceProvisioningType();
```

- *Type:* java.lang.String

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedCapacityGb"></a>

```java
public java.lang.String getPoolProvisionedCapacityGb();
```

- *Type:* java.lang.String

---

##### `poolProvisionedIops`<sup>Required</sup> <a name="poolProvisionedIops" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedIops"></a>

```java
public java.lang.String getPoolProvisionedIops();
```

- *Type:* java.lang.String

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedThroughput"></a>

```java
public java.lang.String getPoolProvisionedThroughput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.storagePoolType"></a>

```java
public java.lang.String getStoragePoolType();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStoragePoolConfig <a name="ComputeStoragePoolConfig" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolConfig;

ComputeStoragePoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .poolProvisionedCapacityGb(java.lang.String)
    .poolProvisionedThroughput(java.lang.String)
    .storagePoolType(java.lang.String)
//  .capacityProvisioningType(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .params(ComputeStoragePoolParams)
//  .performanceProvisioningType(java.lang.String)
//  .poolProvisionedIops(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeStoragePoolTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>java.lang.String</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>java.lang.String</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.capacityProvisioningType">capacityProvisioningType</a></code> | <code>java.lang.String</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this storage pool. These can be later modified by the setLabels method. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.performanceProvisioningType">performanceProvisioningType</a></code> | <code>java.lang.String</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedIops">poolProvisionedIops</a></code> | <code>java.lang.String</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the storage pool resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#name ComputeStoragePool#name}

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedCapacityGb"></a>

```java
public java.lang.String getPoolProvisionedCapacityGb();
```

- *Type:* java.lang.String

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#pool_provisioned_capacity_gb ComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedThroughput"></a>

```java
public java.lang.String getPoolProvisionedThroughput();
```

- *Type:* java.lang.String

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#pool_provisioned_throughput ComputeStoragePool#pool_provisioned_throughput}

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.storagePoolType"></a>

```java
public java.lang.String getStoragePoolType();
```

- *Type:* java.lang.String

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#storage_pool_type ComputeStoragePool#storage_pool_type}

---

##### `capacityProvisioningType`<sup>Optional</sup> <a name="capacityProvisioningType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.capacityProvisioningType"></a>

```java
public java.lang.String getCapacityProvisioningType();
```

- *Type:* java.lang.String

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#capacity_provisioning_type ComputeStoragePool#capacity_provisioning_type}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#deletion_protection ComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#description ComputeStoragePool#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this storage pool. These can be later modified by the setLabels method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#labels ComputeStoragePool#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.params"></a>

```java
public ComputeStoragePoolParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#params ComputeStoragePool#params}

---

##### `performanceProvisioningType`<sup>Optional</sup> <a name="performanceProvisioningType" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.performanceProvisioningType"></a>

```java
public java.lang.String getPerformanceProvisioningType();
```

- *Type:* java.lang.String

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#performance_provisioning_type ComputeStoragePool#performance_provisioning_type}

---

##### `poolProvisionedIops`<sup>Optional</sup> <a name="poolProvisionedIops" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedIops"></a>

```java
public java.lang.String getPoolProvisionedIops();
```

- *Type:* java.lang.String

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#pool_provisioned_iops ComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.timeouts"></a>

```java
public ComputeStoragePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#timeouts ComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#zone ComputeStoragePool#zone}

---

### ComputeStoragePoolParams <a name="ComputeStoragePoolParams" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolParams;

ComputeStoragePoolParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the storage pool. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the storage pool.

Tag keys and values have the
same definition as resource manager tags. Keys and values can be either in numeric format,
such as tagKeys/{tag_key_id} and tagValues/{tag_value_id} or in namespaced format such as
{org_id|projectId}/{tag_key_short_name} and {tag_value_short_name}. The field is ignored when empty.
The field is immutable and causes resource replacement when mutated. This field is only
set at create time and modifying this field after creation will trigger recreation.
To apply tags to an existing resource, see the google_tags_tag_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#resource_manager_tags ComputeStoragePool#resource_manager_tags}

---

### ComputeStoragePoolResourceStatus <a name="ComputeStoragePoolResourceStatus" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatus.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolResourceStatus;

ComputeStoragePoolResourceStatus.builder()
    .build();
```


### ComputeStoragePoolStatus <a name="ComputeStoragePoolStatus" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatus.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolStatus;

ComputeStoragePoolStatus.builder()
    .build();
```


### ComputeStoragePoolTimeouts <a name="ComputeStoragePoolTimeouts" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolTimeouts;

ComputeStoragePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#create ComputeStoragePool#create}. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#delete ComputeStoragePool#delete}. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#update ComputeStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#create ComputeStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#delete ComputeStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_storage_pool#update ComputeStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStoragePoolParamsOutputReference <a name="ComputeStoragePoolParamsOutputReference" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolParamsOutputReference;

new ComputeStoragePoolParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParamsOutputReference.property.internalValue"></a>

```java
public ComputeStoragePoolParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolParams">ComputeStoragePoolParams</a>

---


### ComputeStoragePoolResourceStatusList <a name="ComputeStoragePoolResourceStatusList" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolResourceStatusList;

new ComputeStoragePoolResourceStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.get"></a>

```java
public ComputeStoragePoolResourceStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeStoragePoolResourceStatusOutputReference <a name="ComputeStoragePoolResourceStatusOutputReference" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolResourceStatusOutputReference;

new ComputeStoragePoolResourceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.diskCount">diskCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp">lastResizeTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">maxTotalProvisionedDiskCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes">poolUsedCapacityBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops">poolUsedIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput">poolUsedThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes">poolUserWrittenBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb">totalProvisionedDiskCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops">totalProvisionedDiskIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput">totalProvisionedDiskThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatus">ComputeStoragePoolResourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.diskCount"></a>

```java
public java.lang.String getDiskCount();
```

- *Type:* java.lang.String

---

##### `lastResizeTimestamp`<sup>Required</sup> <a name="lastResizeTimestamp" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp"></a>

```java
public java.lang.String getLastResizeTimestamp();
```

- *Type:* java.lang.String

---

##### `maxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="maxTotalProvisionedDiskCapacityGb" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```java
public java.lang.String getMaxTotalProvisionedDiskCapacityGb();
```

- *Type:* java.lang.String

---

##### `poolUsedCapacityBytes`<sup>Required</sup> <a name="poolUsedCapacityBytes" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes"></a>

```java
public java.lang.String getPoolUsedCapacityBytes();
```

- *Type:* java.lang.String

---

##### `poolUsedIops`<sup>Required</sup> <a name="poolUsedIops" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops"></a>

```java
public java.lang.String getPoolUsedIops();
```

- *Type:* java.lang.String

---

##### `poolUsedThroughput`<sup>Required</sup> <a name="poolUsedThroughput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput"></a>

```java
public java.lang.String getPoolUsedThroughput();
```

- *Type:* java.lang.String

---

##### `poolUserWrittenBytes`<sup>Required</sup> <a name="poolUserWrittenBytes" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes"></a>

```java
public java.lang.String getPoolUserWrittenBytes();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="totalProvisionedDiskCapacityGb" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```java
public java.lang.String getTotalProvisionedDiskCapacityGb();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskIops`<sup>Required</sup> <a name="totalProvisionedDiskIops" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops"></a>

```java
public java.lang.String getTotalProvisionedDiskIops();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskThroughput`<sup>Required</sup> <a name="totalProvisionedDiskThroughput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```java
public java.lang.String getTotalProvisionedDiskThroughput();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.internalValue"></a>

```java
public ComputeStoragePoolResourceStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolResourceStatus">ComputeStoragePoolResourceStatus</a>

---


### ComputeStoragePoolStatusList <a name="ComputeStoragePoolStatusList" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolStatusList;

new ComputeStoragePoolStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.get"></a>

```java
public ComputeStoragePoolStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeStoragePoolStatusOutputReference <a name="ComputeStoragePoolStatusOutputReference" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolStatusOutputReference;

new ComputeStoragePoolStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.diskCount">diskCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp">lastResizeTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">maxTotalProvisionedDiskCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes">poolUsedCapacityBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedIops">poolUsedIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedThroughput">poolUsedThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes">poolUserWrittenBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb">totalProvisionedDiskCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops">totalProvisionedDiskIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput">totalProvisionedDiskThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatus">ComputeStoragePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.diskCount"></a>

```java
public java.lang.String getDiskCount();
```

- *Type:* java.lang.String

---

##### `lastResizeTimestamp`<sup>Required</sup> <a name="lastResizeTimestamp" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp"></a>

```java
public java.lang.String getLastResizeTimestamp();
```

- *Type:* java.lang.String

---

##### `maxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="maxTotalProvisionedDiskCapacityGb" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```java
public java.lang.String getMaxTotalProvisionedDiskCapacityGb();
```

- *Type:* java.lang.String

---

##### `poolUsedCapacityBytes`<sup>Required</sup> <a name="poolUsedCapacityBytes" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes"></a>

```java
public java.lang.String getPoolUsedCapacityBytes();
```

- *Type:* java.lang.String

---

##### `poolUsedIops`<sup>Required</sup> <a name="poolUsedIops" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedIops"></a>

```java
public java.lang.String getPoolUsedIops();
```

- *Type:* java.lang.String

---

##### `poolUsedThroughput`<sup>Required</sup> <a name="poolUsedThroughput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedThroughput"></a>

```java
public java.lang.String getPoolUsedThroughput();
```

- *Type:* java.lang.String

---

##### `poolUserWrittenBytes`<sup>Required</sup> <a name="poolUserWrittenBytes" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes"></a>

```java
public java.lang.String getPoolUserWrittenBytes();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="totalProvisionedDiskCapacityGb" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```java
public java.lang.String getTotalProvisionedDiskCapacityGb();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskIops`<sup>Required</sup> <a name="totalProvisionedDiskIops" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops"></a>

```java
public java.lang.String getTotalProvisionedDiskIops();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskThroughput`<sup>Required</sup> <a name="totalProvisionedDiskThroughput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```java
public java.lang.String getTotalProvisionedDiskThroughput();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.internalValue"></a>

```java
public ComputeStoragePoolStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolStatus">ComputeStoragePoolStatus</a>

---


### ComputeStoragePoolTimeoutsOutputReference <a name="ComputeStoragePoolTimeoutsOutputReference" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_storage_pool.ComputeStoragePoolTimeoutsOutputReference;

new ComputeStoragePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeStoragePoolTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>

---



