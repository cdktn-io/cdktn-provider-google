# `dataplexDataProduct` Submodule <a name="`dataplexDataProduct` Submodule" id="@cdktn/provider-google.dataplexDataProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDataProduct <a name="DataplexDataProduct" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product google_dataplex_data_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProduct;

DataplexDataProduct.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataProductId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .ownerEmails(java.util.List<java.lang.String>)
//  .accessApprovalConfig(DataplexDataProductAccessApprovalConfig)
//  .accessGroups(IResolvable|java.util.List<DataplexDataProductAccessGroups>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .icon(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DataplexDataProductTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.ownerEmails">ownerEmails</a></code> | <code>java.util.List<java.lang.String></code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.accessApprovalConfig">accessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.accessGroups">accessGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>></code> | access_groups block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.icon">icon</a></code> | <code>java.lang.String</code> | Base64 encoded image representing the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.dataProductId"></a>

- *Type:* java.lang.String

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#data_product_id DataplexDataProduct#data_product_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#location DataplexDataProduct#location}

---

##### `ownerEmails`<sup>Required</sup> <a name="ownerEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.ownerEmails"></a>

- *Type:* java.util.List<java.lang.String>

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#owner_emails DataplexDataProduct#owner_emails}

---

##### `accessApprovalConfig`<sup>Optional</sup> <a name="accessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.accessApprovalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#access_approval_config DataplexDataProduct#access_approval_config}

---

##### `accessGroups`<sup>Optional</sup> <a name="accessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.accessGroups"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>>

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#access_groups DataplexDataProduct#access_groups}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#deletion_policy DataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.icon"></a>

- *Type:* java.lang.String

Base64 encoded image representing the data product.

Max Size: 3.0MiB
Expected image dimensions are 512x512 pixels, however the API only
performs validation on size of the encoded data.
Note: For byte fields, the content of the fields are base64-encoded (which
increases the size of the data by 33-36%) when using JSON on the wire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#icon DataplexDataProduct#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#labels DataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#timeouts DataplexDataProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig">putAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups">putAccessGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessApprovalConfig">resetAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessGroups">resetAccessGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessApprovalConfig` <a name="putAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig"></a>

```java
public void putAccessApprovalConfig(DataplexDataProductAccessApprovalConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---

##### `putAccessGroups` <a name="putAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups"></a>

```java
public void putAccessGroups(IResolvable|java.util.List<DataplexDataProductAccessGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts"></a>

```java
public void putTimeouts(DataplexDataProductTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---

##### `resetAccessApprovalConfig` <a name="resetAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessApprovalConfig"></a>

```java
public void resetAccessApprovalConfig()
```

##### `resetAccessGroups` <a name="resetAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessGroups"></a>

```java
public void resetAccessGroups()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIcon` <a name="resetIcon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetIcon"></a>

```java
public void resetIcon()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProduct;

DataplexDataProduct.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProduct;

DataplexDataProduct.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProduct;

DataplexDataProduct.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProduct;

DataplexDataProduct.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataplexDataProduct.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataplexDataProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataplexDataProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataplexDataProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfig">accessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference">DataplexDataProductAccessApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroups">accessGroups</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList">DataplexDataProductAccessGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.assetCount">assetCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference">DataplexDataProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfigInput">accessApprovalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroupsInput">accessGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductIdInput">dataProductIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.iconInput">iconInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmailsInput">ownerEmailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.icon">icon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmails">ownerEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessApprovalConfig`<sup>Required</sup> <a name="accessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfig"></a>

```java
public DataplexDataProductAccessApprovalConfigOutputReference getAccessApprovalConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference">DataplexDataProductAccessApprovalConfigOutputReference</a>

---

##### `accessGroups`<sup>Required</sup> <a name="accessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroups"></a>

```java
public DataplexDataProductAccessGroupsList getAccessGroups();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList">DataplexDataProductAccessGroupsList</a>

---

##### `assetCount`<sup>Required</sup> <a name="assetCount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.assetCount"></a>

```java
public java.lang.Number getAssetCount();
```

- *Type:* java.lang.Number

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeouts"></a>

```java
public DataplexDataProductTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference">DataplexDataProductTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessApprovalConfigInput`<sup>Optional</sup> <a name="accessApprovalConfigInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfigInput"></a>

```java
public DataplexDataProductAccessApprovalConfig getAccessApprovalConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---

##### `accessGroupsInput`<sup>Optional</sup> <a name="accessGroupsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroupsInput"></a>

```java
public IResolvable|java.util.List<DataplexDataProductAccessGroups> getAccessGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>>

---

##### `dataProductIdInput`<sup>Optional</sup> <a name="dataProductIdInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductIdInput"></a>

```java
public java.lang.String getDataProductIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.iconInput"></a>

```java
public java.lang.String getIconInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `ownerEmailsInput`<sup>Optional</sup> <a name="ownerEmailsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmailsInput"></a>

```java
public java.util.List<java.lang.String> getOwnerEmailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeoutsInput"></a>

```java
public IResolvable|DataplexDataProductTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductId"></a>

```java
public java.lang.String getDataProductId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.icon"></a>

```java
public java.lang.String getIcon();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `ownerEmails`<sup>Required</sup> <a name="ownerEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmails"></a>

```java
public java.util.List<java.lang.String> getOwnerEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDataProductAccessApprovalConfig <a name="DataplexDataProductAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductAccessApprovalConfig;

DataplexDataProductAccessApprovalConfig.builder()
//  .approverEmails(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.property.approverEmails">approverEmails</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the email addresses of users who are potential approvers. |

---

##### `approverEmails`<sup>Optional</sup> <a name="approverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.property.approverEmails"></a>

```java
public java.util.List<java.lang.String> getApproverEmails();
```

- *Type:* java.util.List<java.lang.String>

Specifies the email addresses of users who are potential approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#approver_emails DataplexDataProduct#approver_emails}

---

### DataplexDataProductAccessGroups <a name="DataplexDataProductAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductAccessGroups;

DataplexDataProductAccessGroups.builder()
    .displayName(java.lang.String)
    .groupId(java.lang.String)
    .id(java.lang.String)
    .principal(DataplexDataProductAccessGroupsPrincipal)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Unique identifier of the access group. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | principal block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.description">description</a></code> | <code>java.lang.String</code> | Description of the access group. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Unique identifier of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#group_id DataplexDataProduct#group_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.principal"></a>

```java
public DataplexDataProductAccessGroupsPrincipal getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#principal DataplexDataProduct#principal}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

### DataplexDataProductAccessGroupsPrincipal <a name="DataplexDataProductAccessGroupsPrincipal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductAccessGroupsPrincipal;

DataplexDataProductAccessGroupsPrincipal.builder()
//  .googleGroup(java.lang.String)
//  .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.googleGroup">googleGroup</a></code> | <code>java.lang.String</code> | Email of the Google Group. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Specifies the email of the producer service account. |

---

##### `googleGroup`<sup>Optional</sup> <a name="googleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.googleGroup"></a>

```java
public java.lang.String getGoogleGroup();
```

- *Type:* java.lang.String

Email of the Google Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#google_group DataplexDataProduct#google_group}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Specifies the email of the producer service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#service_account DataplexDataProduct#service_account}

---

### DataplexDataProductConfig <a name="DataplexDataProductConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductConfig;

DataplexDataProductConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataProductId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .ownerEmails(java.util.List<java.lang.String>)
//  .accessApprovalConfig(DataplexDataProductAccessApprovalConfig)
//  .accessGroups(IResolvable|java.util.List<DataplexDataProductAccessGroups>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .icon(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DataplexDataProductTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dataProductId">dataProductId</a></code> | <code>java.lang.String</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.ownerEmails">ownerEmails</a></code> | <code>java.util.List<java.lang.String></code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessApprovalConfig">accessApprovalConfig</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessGroups">accessGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>></code> | access_groups block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.icon">icon</a></code> | <code>java.lang.String</code> | Base64 encoded image representing the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataProductId`<sup>Required</sup> <a name="dataProductId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dataProductId"></a>

```java
public java.lang.String getDataProductId();
```

- *Type:* java.lang.String

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#data_product_id DataplexDataProduct#data_product_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#location DataplexDataProduct#location}

---

##### `ownerEmails`<sup>Required</sup> <a name="ownerEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.ownerEmails"></a>

```java
public java.util.List<java.lang.String> getOwnerEmails();
```

- *Type:* java.util.List<java.lang.String>

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#owner_emails DataplexDataProduct#owner_emails}

---

##### `accessApprovalConfig`<sup>Optional</sup> <a name="accessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessApprovalConfig"></a>

```java
public DataplexDataProductAccessApprovalConfig getAccessApprovalConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#access_approval_config DataplexDataProduct#access_approval_config}

---

##### `accessGroups`<sup>Optional</sup> <a name="accessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessGroups"></a>

```java
public IResolvable|java.util.List<DataplexDataProductAccessGroups> getAccessGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>>

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#access_groups DataplexDataProduct#access_groups}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#deletion_policy DataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.icon"></a>

```java
public java.lang.String getIcon();
```

- *Type:* java.lang.String

Base64 encoded image representing the data product.

Max Size: 3.0MiB
Expected image dimensions are 512x512 pixels, however the API only
performs validation on size of the encoded data.
Note: For byte fields, the content of the fields are base64-encoded (which
increases the size of the data by 33-36%) when using JSON on the wire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#icon DataplexDataProduct#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#labels DataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.timeouts"></a>

```java
public DataplexDataProductTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#timeouts DataplexDataProduct#timeouts}

---

### DataplexDataProductTimeouts <a name="DataplexDataProductTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductTimeouts;

DataplexDataProductTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#create DataplexDataProduct#create}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#update DataplexDataProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#create DataplexDataProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_data_product#update DataplexDataProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDataProductAccessApprovalConfigOutputReference <a name="DataplexDataProductAccessApprovalConfigOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductAccessApprovalConfigOutputReference;

new DataplexDataProductAccessApprovalConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails">resetApproverEmails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApproverEmails` <a name="resetApproverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails"></a>

```java
public void resetApproverEmails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput">approverEmailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails">approverEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approverEmailsInput`<sup>Optional</sup> <a name="approverEmailsInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput"></a>

```java
public java.util.List<java.lang.String> getApproverEmailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approverEmails`<sup>Required</sup> <a name="approverEmails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails"></a>

```java
public java.util.List<java.lang.String> getApproverEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.internalValue"></a>

```java
public DataplexDataProductAccessApprovalConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---


### DataplexDataProductAccessGroupsList <a name="DataplexDataProductAccessGroupsList" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductAccessGroupsList;

new DataplexDataProductAccessGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get"></a>

```java
public DataplexDataProductAccessGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataplexDataProductAccessGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>>

---


### DataplexDataProductAccessGroupsOutputReference <a name="DataplexDataProductAccessGroupsOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductAccessGroupsOutputReference;

new DataplexDataProductAccessGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal"></a>

```java
public void putPrincipal(DataplexDataProductAccessGroupsPrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference">DataplexDataProductAccessGroupsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principalInput">principalInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principal"></a>

```java
public DataplexDataProductAccessGroupsPrincipalOutputReference getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference">DataplexDataProductAccessGroupsPrincipalOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principalInput"></a>

```java
public DataplexDataProductAccessGroupsPrincipal getPrincipalInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexDataProductAccessGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>

---


### DataplexDataProductAccessGroupsPrincipalOutputReference <a name="DataplexDataProductAccessGroupsPrincipalOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductAccessGroupsPrincipalOutputReference;

new DataplexDataProductAccessGroupsPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup">resetGoogleGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGoogleGroup` <a name="resetGoogleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup"></a>

```java
public void resetGoogleGroup()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput">googleGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup">googleGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `googleGroupInput`<sup>Optional</sup> <a name="googleGroupInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput"></a>

```java
public java.lang.String getGoogleGroupInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `googleGroup`<sup>Required</sup> <a name="googleGroup" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup"></a>

```java
public java.lang.String getGoogleGroup();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue"></a>

```java
public DataplexDataProductAccessGroupsPrincipal getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---


### DataplexDataProductTimeoutsOutputReference <a name="DataplexDataProductTimeoutsOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_data_product.DataplexDataProductTimeoutsOutputReference;

new DataplexDataProductTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexDataProductTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---



