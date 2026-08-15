# `dataGoogleDataCatalogTaxonomy` Submodule <a name="`dataGoogleDataCatalogTaxonomy` Submodule" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataCatalogTaxonomy <a name="DataGoogleDataCatalogTaxonomy" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy google_data_catalog_taxonomy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataCatalogTaxonomy(Construct Scope, string Id, DataGoogleDataCatalogTaxonomyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig">DataGoogleDataCatalogTaxonomyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig">DataGoogleDataCatalogTaxonomyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDataCatalogTaxonomy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDataCatalogTaxonomy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDataCatalogTaxonomy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDataCatalogTaxonomy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDataCatalogTaxonomy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleDataCatalogTaxonomy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDataCatalogTaxonomy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDataCatalogTaxonomy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDataCatalogTaxonomy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.activatedPolicyTypes">ActivatedPolicyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ActivatedPolicyTypes`<sup>Required</sup> <a name="ActivatedPolicyTypes" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.activatedPolicyTypes"></a>

```csharp
public string[] ActivatedPolicyTypes { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataCatalogTaxonomyConfig <a name="DataGoogleDataCatalogTaxonomyConfig" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataCatalogTaxonomyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Region,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#display_name DataGoogleDataCatalogTaxonomy#display_name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#region DataGoogleDataCatalogTaxonomy#region}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#id DataGoogleDataCatalogTaxonomy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#project DataGoogleDataCatalogTaxonomy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#display_name DataGoogleDataCatalogTaxonomy#display_name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#region DataGoogleDataCatalogTaxonomy#region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#id DataGoogleDataCatalogTaxonomy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleDataCatalogTaxonomy.DataGoogleDataCatalogTaxonomyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/data_catalog_taxonomy#project DataGoogleDataCatalogTaxonomy#project}.

---



