# `dataGoogleComputeReservationSubBlock` Submodule <a name="`dataGoogleComputeReservationSubBlock` Submodule" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeReservationSubBlock <a name="DataGoogleComputeReservationSubBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block google_compute_reservation_sub_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlock;

DataGoogleComputeReservationSubBlock.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .reservation(java.lang.String)
    .reservationBlock(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the reservation sub-block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.reservation">reservation</a></code> | <code>java.lang.String</code> | The name of the parent reservation. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.reservationBlock">reservationBlock</a></code> | <code>java.lang.String</code> | The name of the parent reservation block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone where the reservation sub-block resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the reservation sub-block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#name DataGoogleComputeReservationSubBlock#name}

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.reservation"></a>

- *Type:* java.lang.String

The name of the parent reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#reservation DataGoogleComputeReservationSubBlock#reservation}

---

##### `reservationBlock`<sup>Required</sup> <a name="reservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.reservationBlock"></a>

- *Type:* java.lang.String

The name of the parent reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#reservation_block DataGoogleComputeReservationSubBlock#reservation_block}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#project DataGoogleComputeReservationSubBlock#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone where the reservation sub-block resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#zone DataGoogleComputeReservationSubBlock#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetProject"></a>

```java
public void resetProject()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlock;

DataGoogleComputeReservationSubBlock.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlock;

DataGoogleComputeReservationSubBlock.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlock;

DataGoogleComputeReservationSubBlock.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlock;

DataGoogleComputeReservationSubBlock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeReservationSubBlock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeReservationSubBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeReservationSubBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeReservationSubBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.healthInfo">healthInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList">DataGoogleComputeReservationSubBlockHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.inUseCount">inUseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.physicalTopology">physicalTopology</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList">DataGoogleComputeReservationSubBlockPhysicalTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationSubBlockMaintenance">reservationSubBlockMaintenance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLinkWithId">selfLinkWithId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.subBlockCount">subBlockCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlockInput">reservationBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationInput">reservationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservation">reservation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlock">reservationBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `healthInfo`<sup>Required</sup> <a name="healthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.healthInfo"></a>

```java
public DataGoogleComputeReservationSubBlockHealthInfoList getHealthInfo();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList">DataGoogleComputeReservationSubBlockHealthInfoList</a>

---

##### `inUseCount`<sup>Required</sup> <a name="inUseCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.inUseCount"></a>

```java
public java.lang.Number getInUseCount();
```

- *Type:* java.lang.Number

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `physicalTopology`<sup>Required</sup> <a name="physicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.physicalTopology"></a>

```java
public DataGoogleComputeReservationSubBlockPhysicalTopologyList getPhysicalTopology();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList">DataGoogleComputeReservationSubBlockPhysicalTopologyList</a>

---

##### `reservationSubBlockMaintenance`<sup>Required</sup> <a name="reservationSubBlockMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationSubBlockMaintenance"></a>

```java
public DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList getReservationSubBlockMaintenance();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLinkWithId"></a>

```java
public java.lang.String getSelfLinkWithId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subBlockCount`<sup>Required</sup> <a name="subBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.subBlockCount"></a>

```java
public java.lang.Number getSubBlockCount();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservationBlockInput`<sup>Optional</sup> <a name="reservationBlockInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlockInput"></a>

```java
public java.lang.String getReservationBlockInput();
```

- *Type:* java.lang.String

---

##### `reservationInput`<sup>Optional</sup> <a name="reservationInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationInput"></a>

```java
public java.lang.String getReservationInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservation"></a>

```java
public java.lang.String getReservation();
```

- *Type:* java.lang.String

---

##### `reservationBlock`<sup>Required</sup> <a name="reservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlock"></a>

```java
public java.lang.String getReservationBlock();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeReservationSubBlockConfig <a name="DataGoogleComputeReservationSubBlockConfig" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockConfig;

DataGoogleComputeReservationSubBlockConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .reservation(java.lang.String)
    .reservationBlock(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the reservation sub-block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservation">reservation</a></code> | <code>java.lang.String</code> | The name of the parent reservation. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservationBlock">reservationBlock</a></code> | <code>java.lang.String</code> | The name of the parent reservation block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone where the reservation sub-block resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the reservation sub-block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#name DataGoogleComputeReservationSubBlock#name}

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservation"></a>

```java
public java.lang.String getReservation();
```

- *Type:* java.lang.String

The name of the parent reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#reservation DataGoogleComputeReservationSubBlock#reservation}

---

##### `reservationBlock`<sup>Required</sup> <a name="reservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservationBlock"></a>

```java
public java.lang.String getReservationBlock();
```

- *Type:* java.lang.String

The name of the parent reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#reservation_block DataGoogleComputeReservationSubBlock#reservation_block}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#project DataGoogleComputeReservationSubBlock#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone where the reservation sub-block resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_reservation_sub_block#zone DataGoogleComputeReservationSubBlock#zone}

---

### DataGoogleComputeReservationSubBlockHealthInfo <a name="DataGoogleComputeReservationSubBlockHealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockHealthInfo;

DataGoogleComputeReservationSubBlockHealthInfo.builder()
    .build();
```


### DataGoogleComputeReservationSubBlockPhysicalTopology <a name="DataGoogleComputeReservationSubBlockPhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockPhysicalTopology;

DataGoogleComputeReservationSubBlockPhysicalTopology.builder()
    .build();
```


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance;

DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeReservationSubBlockHealthInfoList <a name="DataGoogleComputeReservationSubBlockHealthInfoList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockHealthInfoList;

new DataGoogleComputeReservationSubBlockHealthInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get"></a>

```java
public DataGoogleComputeReservationSubBlockHealthInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeReservationSubBlockHealthInfoOutputReference <a name="DataGoogleComputeReservationSubBlockHealthInfoOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockHealthInfoOutputReference;

new DataGoogleComputeReservationSubBlockHealthInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedHostCount">degradedHostCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedInfraCount">degradedInfraCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthStatus">healthStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyHostCount">healthyHostCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyInfraCount">healthyInfraCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo">DataGoogleComputeReservationSubBlockHealthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `degradedHostCount`<sup>Required</sup> <a name="degradedHostCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedHostCount"></a>

```java
public java.lang.Number getDegradedHostCount();
```

- *Type:* java.lang.Number

---

##### `degradedInfraCount`<sup>Required</sup> <a name="degradedInfraCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedInfraCount"></a>

```java
public java.lang.Number getDegradedInfraCount();
```

- *Type:* java.lang.Number

---

##### `healthStatus`<sup>Required</sup> <a name="healthStatus" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthStatus"></a>

```java
public java.lang.String getHealthStatus();
```

- *Type:* java.lang.String

---

##### `healthyHostCount`<sup>Required</sup> <a name="healthyHostCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyHostCount"></a>

```java
public java.lang.Number getHealthyHostCount();
```

- *Type:* java.lang.Number

---

##### `healthyInfraCount`<sup>Required</sup> <a name="healthyInfraCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyInfraCount"></a>

```java
public java.lang.Number getHealthyInfraCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeReservationSubBlockHealthInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo">DataGoogleComputeReservationSubBlockHealthInfo</a>

---


### DataGoogleComputeReservationSubBlockPhysicalTopologyList <a name="DataGoogleComputeReservationSubBlockPhysicalTopologyList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockPhysicalTopologyList;

new DataGoogleComputeReservationSubBlockPhysicalTopologyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get"></a>

```java
public DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference <a name="DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference;

new DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.block">block</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.subBlock">subBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology">DataGoogleComputeReservationSubBlockPhysicalTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.block"></a>

```java
public java.lang.String getBlock();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `subBlock`<sup>Required</sup> <a name="subBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.subBlock"></a>

```java
public java.lang.String getSubBlock();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeReservationSubBlockPhysicalTopology getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology">DataGoogleComputeReservationSubBlockPhysicalTopology</a>

---


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList;

new DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get"></a>

```java
public DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_reservation_sub_block.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference;

new DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">instanceMaintenanceOngoingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenancePendingCount">instanceMaintenancePendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenanceOngoingCount">maintenanceOngoingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenancePendingCount">maintenancePendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.schedulingType">schedulingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">subblockInfraMaintenanceOngoingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">subblockInfraMaintenancePendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceMaintenanceOngoingCount`<sup>Required</sup> <a name="instanceMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```java
public java.lang.Number getInstanceMaintenanceOngoingCount();
```

- *Type:* java.lang.Number

---

##### `instanceMaintenancePendingCount`<sup>Required</sup> <a name="instanceMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```java
public java.lang.Number getInstanceMaintenancePendingCount();
```

- *Type:* java.lang.Number

---

##### `maintenanceOngoingCount`<sup>Required</sup> <a name="maintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```java
public java.lang.Number getMaintenanceOngoingCount();
```

- *Type:* java.lang.Number

---

##### `maintenancePendingCount`<sup>Required</sup> <a name="maintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenancePendingCount"></a>

```java
public java.lang.Number getMaintenancePendingCount();
```

- *Type:* java.lang.Number

---

##### `schedulingType`<sup>Required</sup> <a name="schedulingType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.schedulingType"></a>

```java
public java.lang.String getSchedulingType();
```

- *Type:* java.lang.String

---

##### `subblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="subblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```java
public java.lang.Number getSubblockInfraMaintenanceOngoingCount();
```

- *Type:* java.lang.Number

---

##### `subblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="subblockInfraMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```java
public java.lang.Number getSubblockInfraMaintenancePendingCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance</a>

---



