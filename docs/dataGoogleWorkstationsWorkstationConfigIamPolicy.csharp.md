# `dataGoogleWorkstationsWorkstationConfigIamPolicy` Submodule <a name="`dataGoogleWorkstationsWorkstationConfigIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleWorkstationsWorkstationConfigIamPolicy <a name="DataGoogleWorkstationsWorkstationConfigIamPolicy" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy google_workstations_workstation_config_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleWorkstationsWorkstationConfigIamPolicy(Construct Scope, string Id, DataGoogleWorkstationsWorkstationConfigIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig">DataGoogleWorkstationsWorkstationConfigIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig">DataGoogleWorkstationsWorkstationConfigIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleWorkstationsWorkstationConfigIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleWorkstationsWorkstationConfigIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleWorkstationsWorkstationConfigIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleWorkstationsWorkstationConfigIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleWorkstationsWorkstationConfigIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleWorkstationsWorkstationConfigIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleWorkstationsWorkstationConfigIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleWorkstationsWorkstationConfigIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleWorkstationsWorkstationConfigIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationConfigIdInput">WorkstationConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationClusterIdInput"></a>

```csharp
public string WorkstationClusterIdInput { get; }
```

- *Type:* string

---

##### `WorkstationConfigIdInput`<sup>Optional</sup> <a name="WorkstationConfigIdInput" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationConfigIdInput"></a>

```csharp
public string WorkstationConfigIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; }
```

- *Type:* string

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleWorkstationsWorkstationConfigIamPolicyConfig <a name="DataGoogleWorkstationsWorkstationConfigIamPolicyConfig" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleWorkstationsWorkstationConfigIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string WorkstationClusterId,
    string WorkstationConfigId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#workstation_cluster_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_cluster_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#workstation_config_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_config_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#id DataGoogleWorkstationsWorkstationConfigIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#location DataGoogleWorkstationsWorkstationConfigIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#project DataGoogleWorkstationsWorkstationConfigIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#workstation_cluster_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_cluster_id}.

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#workstation_config_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_config_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#id DataGoogleWorkstationsWorkstationConfigIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#location DataGoogleWorkstationsWorkstationConfigIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/workstations_workstation_config_iam_policy#project DataGoogleWorkstationsWorkstationConfigIamPolicy#project}.

---



