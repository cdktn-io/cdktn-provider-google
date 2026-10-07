# `dataGoogleComputeServiceAttachments` Submodule <a name="`dataGoogleComputeServiceAttachments` Submodule" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeServiceAttachments <a name="DataGoogleComputeServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments google_compute_service_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachments(Construct Scope, string Id, DataGoogleComputeServiceAttachmentsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig">DataGoogleComputeServiceAttachmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig">DataGoogleComputeServiceAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeServiceAttachments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeServiceAttachments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeServiceAttachments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeServiceAttachments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeServiceAttachments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeServiceAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeServiceAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments">ServiceAttachments</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ServiceAttachments`<sup>Required</sup> <a name="ServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments"></a>

```csharp
public DataGoogleComputeServiceAttachmentsServiceAttachmentsList ServiceAttachments { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeServiceAttachmentsConfig <a name="DataGoogleComputeServiceAttachmentsConfig" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Filter = null,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}.

---

### DataGoogleComputeServiceAttachmentsServiceAttachments <a name="DataGoogleComputeServiceAttachmentsServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachments {

};
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints {

};
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists {

};
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get"></a>

```csharp
private DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork">ConsumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps">NatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount">PropagatedConnectionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```csharp
public string ConsumerNetwork { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `NatIps`<sup>Required</sup> <a name="NatIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps"></a>

```csharp
public string[] NatIps { get; }
```

- *Type:* string[]

---

##### `PropagatedConnectionCount`<sup>Required</sup> <a name="PropagatedConnectionCount" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```csharp
public double PropagatedConnectionCount { get; }
```

- *Type:* double

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get"></a>

```csharp
private DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; }
```

- *Type:* double

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `ProjectIdOrNum`<sup>Required</sup> <a name="ProjectIdOrNum" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```csharp
public string ProjectIdOrNum { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get"></a>

```csharp
private DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints">ConnectedEndpoints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference">ConnectionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames">DomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint">NatIpsPerEndpoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets">NatSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit">PropagatedConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId">PscServiceAttachmentId</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections">ReconcileConnections</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero">SendPropagatedConnectionLimitIfZero</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps">ShowNatIps</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService">TargetService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectedEndpoints`<sup>Required</sup> <a name="ConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints"></a>

```csharp
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList ConnectedEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a>

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference"></a>

```csharp
public string ConnectionPreference { get; }
```

- *Type:* string

---

##### `ConsumerAcceptLists`<sup>Required</sup> <a name="ConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists"></a>

```csharp
public DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList ConsumerAcceptLists { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a>

---

##### `ConsumerRejectLists`<sup>Required</sup> <a name="ConsumerRejectLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists"></a>

```csharp
public string[] ConsumerRejectLists { get; }
```

- *Type:* string[]

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames"></a>

```csharp
public string[] DomainNames { get; }
```

- *Type:* string[]

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol"></a>

```csharp
public IResolvable EnableProxyProtocol { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatIpsPerEndpoint`<sup>Required</sup> <a name="NatIpsPerEndpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint"></a>

```csharp
public double NatIpsPerEndpoint { get; }
```

- *Type:* double

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets"></a>

```csharp
public string[] NatSubnets { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PropagatedConnectionLimit`<sup>Required</sup> <a name="PropagatedConnectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit"></a>

```csharp
public double PropagatedConnectionLimit { get; }
```

- *Type:* double

---

##### `PscServiceAttachmentId`<sup>Required</sup> <a name="PscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId"></a>

```csharp
public DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList PscServiceAttachmentId { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a>

---

##### `ReconcileConnections`<sup>Required</sup> <a name="ReconcileConnections" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections"></a>

```csharp
public IResolvable ReconcileConnections { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SendPropagatedConnectionLimitIfZero`<sup>Required</sup> <a name="SendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero"></a>

```csharp
public IResolvable SendPropagatedConnectionLimitIfZero { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ShowNatIps`<sup>Required</sup> <a name="ShowNatIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps"></a>

```csharp
public IResolvable ShowNatIps { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService"></a>

```csharp
public string TargetService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeServiceAttachmentsServiceAttachments InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get"></a>

```csharp
private DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high">High</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low">Low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high"></a>

```csharp
public string High { get; }
```

- *Type:* string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low"></a>

```csharp
public string Low { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a>

---



