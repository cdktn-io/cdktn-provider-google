# `dataGoogleStorageBucketObjectContent` Submodule <a name="`dataGoogleStorageBucketObjectContent` Submodule" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucketObjectContent <a name="DataGoogleStorageBucketObjectContent" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/storage_bucket_object_content google_storage_bucket_object_content}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContent(Construct Scope, string Id, DataGoogleStorageBucketObjectContentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig">DataGoogleStorageBucketObjectContentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig">DataGoogleStorageBucketObjectContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageBucketObjectContent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageBucketObjectContent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageBucketObjectContent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageBucketObjectContent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageBucketObjectContent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleStorageBucketObjectContent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageBucketObjectContent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageBucketObjectContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/storage_bucket_object_content#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageBucketObjectContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentBase64Sha512">ContentBase64Sha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentHexsha512">ContentHexsha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contexts">Contexts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList">DataGoogleStorageBucketObjectContentContextsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.crc32C">Crc32C</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.customerEncryption">CustomerEncryption</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList">DataGoogleStorageBucketObjectContentCustomerEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.detectMd5Hash">DetectMd5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.eventBasedHold">EventBasedHold</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forceEmptyContentType">ForceEmptyContentType</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hash">Md5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hexhash">Md5Hexhash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.mediaLink">MediaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.metadata">Metadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.outputName">OutputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.retention">Retention</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList">DataGoogleStorageBucketObjectContentRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.sourceMd5Hash">SourceMd5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.temporaryHold">TemporaryHold</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `ContentBase64Sha512`<sup>Required</sup> <a name="ContentBase64Sha512" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentBase64Sha512"></a>

```csharp
public string ContentBase64Sha512 { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentHexsha512`<sup>Required</sup> <a name="ContentHexsha512" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentHexsha512"></a>

```csharp
public string ContentHexsha512 { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Contexts`<sup>Required</sup> <a name="Contexts" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contexts"></a>

```csharp
public DataGoogleStorageBucketObjectContentContextsList Contexts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList">DataGoogleStorageBucketObjectContentContextsList</a>

---

##### `Crc32C`<sup>Required</sup> <a name="Crc32C" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.crc32C"></a>

```csharp
public string Crc32C { get; }
```

- *Type:* string

---

##### `CustomerEncryption`<sup>Required</sup> <a name="CustomerEncryption" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.customerEncryption"></a>

```csharp
public DataGoogleStorageBucketObjectContentCustomerEncryptionList CustomerEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList">DataGoogleStorageBucketObjectContentCustomerEncryptionList</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DetectMd5Hash`<sup>Required</sup> <a name="DetectMd5Hash" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.detectMd5Hash"></a>

```csharp
public string DetectMd5Hash { get; }
```

- *Type:* string

---

##### `EventBasedHold`<sup>Required</sup> <a name="EventBasedHold" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.eventBasedHold"></a>

```csharp
public IResolvable EventBasedHold { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ForceEmptyContentType`<sup>Required</sup> <a name="ForceEmptyContentType" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forceEmptyContentType"></a>

```csharp
public IResolvable ForceEmptyContentType { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Md5Hash`<sup>Required</sup> <a name="Md5Hash" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hash"></a>

```csharp
public string Md5Hash { get; }
```

- *Type:* string

---

##### `Md5Hexhash`<sup>Required</sup> <a name="Md5Hexhash" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hexhash"></a>

```csharp
public string Md5Hexhash { get; }
```

- *Type:* string

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.mediaLink"></a>

```csharp
public string MediaLink { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `OutputName`<sup>Required</sup> <a name="OutputName" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.outputName"></a>

```csharp
public string OutputName { get; }
```

- *Type:* string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.retention"></a>

```csharp
public DataGoogleStorageBucketObjectContentRetentionList Retention { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList">DataGoogleStorageBucketObjectContentRetentionList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceMd5Hash`<sup>Required</sup> <a name="SourceMd5Hash" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.sourceMd5Hash"></a>

```csharp
public string SourceMd5Hash { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.temporaryHold"></a>

```csharp
public IResolvable TemporaryHold { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketObjectContentConfig <a name="DataGoogleStorageBucketObjectContentConfig" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    string Name,
    string Content = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.bucket">Bucket</a></code> | <code>string</code> | The name of the containing bucket. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.name">Name</a></code> | <code>string</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.content">Content</a></code> | <code>string</code> | Data as string to be uploaded. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/storage_bucket_object_content#bucket DataGoogleStorageBucketObjectContent#bucket}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/storage_bucket_object_content#name DataGoogleStorageBucketObjectContent#name}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/storage_bucket_object_content#content DataGoogleStorageBucketObjectContent#content}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageBucketObjectContentContexts <a name="DataGoogleStorageBucketObjectContentContexts" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContexts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContexts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentContexts {

};
```


### DataGoogleStorageBucketObjectContentContextsCustom <a name="DataGoogleStorageBucketObjectContentContextsCustom" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentContextsCustom {

};
```


### DataGoogleStorageBucketObjectContentCustomerEncryption <a name="DataGoogleStorageBucketObjectContentCustomerEncryption" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentCustomerEncryption {

};
```


### DataGoogleStorageBucketObjectContentRetention <a name="DataGoogleStorageBucketObjectContentRetention" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentRetention {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketObjectContentContextsCustomList <a name="DataGoogleStorageBucketObjectContentContextsCustomList" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentContextsCustomList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.get"></a>

```csharp
private DataGoogleStorageBucketObjectContentContextsCustomOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageBucketObjectContentContextsCustomOutputReference <a name="DataGoogleStorageBucketObjectContentContextsCustomOutputReference" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentContextsCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustom">DataGoogleStorageBucketObjectContentContextsCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageBucketObjectContentContextsCustom InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustom">DataGoogleStorageBucketObjectContentContextsCustom</a>

---


### DataGoogleStorageBucketObjectContentContextsList <a name="DataGoogleStorageBucketObjectContentContextsList" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentContextsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.get"></a>

```csharp
private DataGoogleStorageBucketObjectContentContextsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageBucketObjectContentContextsOutputReference <a name="DataGoogleStorageBucketObjectContentContextsOutputReference" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentContextsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList">DataGoogleStorageBucketObjectContentContextsCustomList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContexts">DataGoogleStorageBucketObjectContentContexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.property.custom"></a>

```csharp
public DataGoogleStorageBucketObjectContentContextsCustomList Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsCustomList">DataGoogleStorageBucketObjectContentContextsCustomList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContextsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageBucketObjectContentContexts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentContexts">DataGoogleStorageBucketObjectContentContexts</a>

---


### DataGoogleStorageBucketObjectContentCustomerEncryptionList <a name="DataGoogleStorageBucketObjectContentCustomerEncryptionList" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentCustomerEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get"></a>

```csharp
private DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference <a name="DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption">DataGoogleStorageBucketObjectContentCustomerEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageBucketObjectContentCustomerEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption">DataGoogleStorageBucketObjectContentCustomerEncryption</a>

---


### DataGoogleStorageBucketObjectContentRetentionList <a name="DataGoogleStorageBucketObjectContentRetentionList" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentRetentionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get"></a>

```csharp
private DataGoogleStorageBucketObjectContentRetentionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageBucketObjectContentRetentionOutputReference <a name="DataGoogleStorageBucketObjectContentRetentionOutputReference" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageBucketObjectContentRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.retainUntilTime">RetainUntilTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention">DataGoogleStorageBucketObjectContentRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RetainUntilTime`<sup>Required</sup> <a name="RetainUntilTime" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.retainUntilTime"></a>

```csharp
public string RetainUntilTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageBucketObjectContentRetention InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention">DataGoogleStorageBucketObjectContentRetention</a>

---



