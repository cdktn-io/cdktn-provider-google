# `dataGoogleComputeRegionSecurityPolicy` Submodule <a name="`dataGoogleComputeRegionSecurityPolicy` Submodule" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionSecurityPolicy <a name="DataGoogleComputeRegionSecurityPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicy(Construct Scope, string Id, DataGoogleComputeRegionSecurityPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig">DataGoogleComputeRegionSecurityPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig">DataGoogleComputeRegionSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeRegionSecurityPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeRegionSecurityPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeRegionSecurityPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeRegionSecurityPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleComputeRegionSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRegionSecurityPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig">DdosProtectionConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList">DataGoogleComputeRegionSecurityPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">SelfLinkWithPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AdvancedOptionsConfig`<sup>Required</sup> <a name="AdvancedOptionsConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.advancedOptionsConfig"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList AdvancedOptionsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList</a>

---

##### `DdosProtectionConfig`<sup>Required</sup> <a name="DdosProtectionConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList DdosProtectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.rules"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList">DataGoogleComputeRegionSecurityPolicyRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithPolicyId`<sup>Required</sup> <a name="SelfLinkWithPolicyId" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```csharp
public string SelfLinkWithPolicyId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList UserDefinedFields { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig {

};
```


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {

};
```


### DataGoogleComputeRegionSecurityPolicyConfig <a name="DataGoogleComputeRegionSecurityPolicyConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#id DataGoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#project DataGoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created Region Security Policy should reside. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#name DataGoogleComputeRegionSecurityPolicy#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#id DataGoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#project DataGoogleComputeRegionSecurityPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_region_security_policy#region DataGoogleComputeRegionSecurityPolicy#region}

---

### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig {

};
```


### DataGoogleComputeRegionSecurityPolicyRules <a name="DataGoogleComputeRegionSecurityPolicyRules" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRules {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesMatch <a name="DataGoogleComputeRegionSecurityPolicyRulesMatch" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatch {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfig <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatchConfig {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesMatchExpr <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExpr" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatchExpr {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs {

};
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold {

};
```


### DataGoogleComputeRegionSecurityPolicyUserDefinedFields <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFields" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyUserDefinedFields {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">ContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```csharp
public string[] ContentTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">JsonParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonCustomConfig`<sup>Required</sup> <a name="JsonCustomConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList JsonCustomConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a>

---

##### `JsonParsing`<sup>Required</sup> <a name="JsonParsing" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```csharp
public string JsonParsing { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `UserIpRequestHeaders`<sup>Required</sup> <a name="UserIpRequestHeaders" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```csharp
public string[] UserIpRequestHeaders { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">DdosProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DdosProtection`<sup>Required</sup> <a name="DdosProtection" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```csharp
public string DdosProtection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesList <a name="DataGoogleComputeRegionSecurityPolicyRulesList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig">DataGoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesMatchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig">DataGoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchExprList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExprList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatchExprList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr">DataGoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesMatchExpr InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr">DataGoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList">DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList">DataGoogleComputeRegionSecurityPolicyRulesMatchExprList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch">DataGoogleComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList Config { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList">DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesMatchExprList Expr { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList">DataGoogleComputeRegionSecurityPolicyRulesMatchExprList</a>

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr"></a>

```csharp
public string VersionedExpr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch">DataGoogleComputeRegionSecurityPolicyRulesMatch</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts">DestPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns">SrcAsns</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts">SrcPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; }
```

- *Type:* string[]

---

##### `DestPorts`<sup>Required</sup> <a name="DestPorts" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts"></a>

```csharp
public string[] DestPorts { get; }
```

- *Type:* string[]

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; }
```

- *Type:* string[]

---

##### `SrcAsns`<sup>Required</sup> <a name="SrcAsns" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns"></a>

```csharp
public double[] SrcAsns { get; }
```

- *Type:* double[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `SrcPorts`<sup>Required</sup> <a name="SrcPorts" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts"></a>

```csharp
public string[] SrcPorts { get; }
```

- *Type:* string[]

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes"></a>

```csharp
public string[] SrcRegionCodes { get; }
```

- *Type:* string[]

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList UserDefinedFields { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList">DataGoogleComputeRegionSecurityPolicyRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview">Preview</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules">DataGoogleComputeRegionSecurityPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.match"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesMatchList Match { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList">DataGoogleComputeRegionSecurityPolicyRulesMatchList</a>

---

##### `NetworkMatch`<sup>Required</sup> <a name="NetworkMatch" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList NetworkMatch { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList PreconfiguredWafConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList</a>

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview"></a>

```csharp
public IResolvable Preview { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList RateLimitOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules">DataGoogleComputeRegionSecurityPolicyRules</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList RequestCookie { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList RequestHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList RequestQueryParam { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList RequestUri { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```csharp
public string[] TargetRuleIds { get; }
```

- *Type:* string[]

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```csharp
public string TargetRuleSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList Exclusion { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```csharp
public double IntervalSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; }
```

- *Type:* string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```csharp
public string EnforceOnKeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction">ConformAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction">ExceedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec"></a>

```csharp
public double BanDurationSec { get; }
```

- *Type:* double

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList BanThreshold { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList</a>

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction"></a>

```csharp
public string ConformAction { get; }
```

- *Type:* string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```csharp
public string EnforceOnKey { get; }
```

- *Type:* string

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList EnforceOnKeyConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; }
```

- *Type:* string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction"></a>

```csharp
public string ExceedAction { get; }
```

- *Type:* string

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList RateLimitThreshold { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```csharp
public double IntervalSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---


### DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```csharp
private DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">Base</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">Mask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields">DataGoogleComputeRegionSecurityPolicyUserDefinedFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```csharp
public string Base { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```csharp
public string Mask { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionSecurityPolicyUserDefinedFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields">DataGoogleComputeRegionSecurityPolicyUserDefinedFields</a>

---



