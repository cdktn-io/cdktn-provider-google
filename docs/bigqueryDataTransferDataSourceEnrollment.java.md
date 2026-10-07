# `bigqueryDataTransferDataSourceEnrollment` Submodule <a name="`bigqueryDataTransferDataSourceEnrollment` Submodule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataTransferDataSourceEnrollment <a name="BigqueryDataTransferDataSourceEnrollment" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment google_bigquery_data_transfer_data_source_enrollment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollment;

BigqueryDataTransferDataSourceEnrollment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataSourceId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BigqueryDataTransferDataSourceEnrollmentTimeouts)
//  .unenrollLocation(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.unenrollLocation">unenrollLocation</a></code> | <code>java.lang.String</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#data_source_id BigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#deletion_policy BigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#timeouts BigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `unenrollLocation`<sup>Optional</sup> <a name="unenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.unenrollLocation"></a>

- *Type:* java.lang.String

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#unenroll_location BigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation">resetUnenrollLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts"></a>

```java
public void putTimeouts(BigqueryDataTransferDataSourceEnrollmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUnenrollLocation` <a name="resetUnenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation"></a>

```java
public void resetUnenrollLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollment;

BigqueryDataTransferDataSourceEnrollment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollment;

BigqueryDataTransferDataSourceEnrollment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollment;

BigqueryDataTransferDataSourceEnrollment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollment;

BigqueryDataTransferDataSourceEnrollment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryDataTransferDataSourceEnrollment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryDataTransferDataSourceEnrollment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryDataTransferDataSourceEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDataTransferDataSourceEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataRefreshType">dataRefreshType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays">defaultDataRefreshWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultSchedule">defaultSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.helpUrl">helpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled">manualRunsDisabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval">minimumScheduleInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList">BigqueryDataTransferDataSourceEnrollmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule">supportsCustomSchedule</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds">updateDeadlineSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput">unenrollLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocation">unenrollLocation</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `dataRefreshType`<sup>Required</sup> <a name="dataRefreshType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataRefreshType"></a>

```java
public java.lang.String getDataRefreshType();
```

- *Type:* java.lang.String

---

##### `defaultDataRefreshWindowDays`<sup>Required</sup> <a name="defaultDataRefreshWindowDays" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays"></a>

```java
public java.lang.Number getDefaultDataRefreshWindowDays();
```

- *Type:* java.lang.Number

---

##### `defaultSchedule`<sup>Required</sup> <a name="defaultSchedule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultSchedule"></a>

```java
public java.lang.String getDefaultSchedule();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `helpUrl`<sup>Required</sup> <a name="helpUrl" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.helpUrl"></a>

```java
public java.lang.String getHelpUrl();
```

- *Type:* java.lang.String

---

##### `manualRunsDisabled`<sup>Required</sup> <a name="manualRunsDisabled" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled"></a>

```java
public IResolvable getManualRunsDisabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `minimumScheduleInterval`<sup>Required</sup> <a name="minimumScheduleInterval" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval"></a>

```java
public java.lang.String getMinimumScheduleInterval();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.parameters"></a>

```java
public BigqueryDataTransferDataSourceEnrollmentParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList">BigqueryDataTransferDataSourceEnrollmentParametersList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportsCustomSchedule`<sup>Required</sup> <a name="supportsCustomSchedule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule"></a>

```java
public IResolvable getSupportsCustomSchedule();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeouts"></a>

```java
public BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a>

---

##### `updateDeadlineSeconds`<sup>Required</sup> <a name="updateDeadlineSeconds" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds"></a>

```java
public java.lang.Number getUpdateDeadlineSeconds();
```

- *Type:* java.lang.Number

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeoutsInput"></a>

```java
public IResolvable|BigqueryDataTransferDataSourceEnrollmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `unenrollLocationInput`<sup>Optional</sup> <a name="unenrollLocationInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput"></a>

```java
public java.lang.String getUnenrollLocationInput();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `unenrollLocation`<sup>Required</sup> <a name="unenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocation"></a>

```java
public java.lang.String getUnenrollLocation();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDataTransferDataSourceEnrollmentConfig <a name="BigqueryDataTransferDataSourceEnrollmentConfig" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollmentConfig;

BigqueryDataTransferDataSourceEnrollmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataSourceId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BigqueryDataTransferDataSourceEnrollmentTimeouts)
//  .unenrollLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation">unenrollLocation</a></code> | <code>java.lang.String</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#data_source_id BigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#deletion_policy BigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts"></a>

```java
public BigqueryDataTransferDataSourceEnrollmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#timeouts BigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `unenrollLocation`<sup>Optional</sup> <a name="unenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation"></a>

```java
public java.lang.String getUnenrollLocation();
```

- *Type:* java.lang.String

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#unenroll_location BigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

### BigqueryDataTransferDataSourceEnrollmentParameters <a name="BigqueryDataTransferDataSourceEnrollmentParameters" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters.Initializer"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollmentParameters;

BigqueryDataTransferDataSourceEnrollmentParameters.builder()
    .build();
```


### BigqueryDataTransferDataSourceEnrollmentTimeouts <a name="BigqueryDataTransferDataSourceEnrollmentTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts;

BigqueryDataTransferDataSourceEnrollmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDataTransferDataSourceEnrollmentParametersList <a name="BigqueryDataTransferDataSourceEnrollmentParametersList" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollmentParametersList;

new BigqueryDataTransferDataSourceEnrollmentParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get"></a>

```java
public BigqueryDataTransferDataSourceEnrollmentParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BigqueryDataTransferDataSourceEnrollmentParametersOutputReference <a name="BigqueryDataTransferDataSourceEnrollmentParametersOutputReference" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference;

new BigqueryDataTransferDataSourceEnrollmentParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated">deprecated</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable">immutable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize">maxListSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue">minValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId">paramId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required">required</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription">validationDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl">validationHelpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex">validationRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters">BigqueryDataTransferDataSourceEnrollmentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated"></a>

```java
public IResolvable getDeprecated();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `immutable`<sup>Required</sup> <a name="immutable" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable"></a>

```java
public IResolvable getImmutable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxListSize`<sup>Required</sup> <a name="maxListSize" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize"></a>

```java
public java.lang.Number getMaxListSize();
```

- *Type:* java.lang.Number

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue"></a>

```java
public java.lang.Number getMaxValue();
```

- *Type:* java.lang.Number

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue"></a>

```java
public java.lang.Number getMinValue();
```

- *Type:* java.lang.Number

---

##### `paramId`<sup>Required</sup> <a name="paramId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId"></a>

```java
public java.lang.String getParamId();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required"></a>

```java
public IResolvable getRequired();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validationDescription`<sup>Required</sup> <a name="validationDescription" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription"></a>

```java
public java.lang.String getValidationDescription();
```

- *Type:* java.lang.String

---

##### `validationHelpUrl`<sup>Required</sup> <a name="validationHelpUrl" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl"></a>

```java
public java.lang.String getValidationHelpUrl();
```

- *Type:* java.lang.String

---

##### `validationRegex`<sup>Required</sup> <a name="validationRegex" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex"></a>

```java
public java.lang.String getValidationRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue"></a>

```java
public BigqueryDataTransferDataSourceEnrollmentParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters">BigqueryDataTransferDataSourceEnrollmentParameters</a>

---


### BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference <a name="BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.bigquery_data_transfer_data_source_enrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference;

new BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BigqueryDataTransferDataSourceEnrollmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---



