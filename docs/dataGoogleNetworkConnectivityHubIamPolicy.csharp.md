# `dataGoogleNetworkConnectivityHubIamPolicy` Submodule <a name="`dataGoogleNetworkConnectivityHubIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkConnectivityHubIamPolicy <a name="DataGoogleNetworkConnectivityHubIamPolicy" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_connectivity_hub_iam_policy google_network_connectivity_hub_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkConnectivityHubIamPolicy(Construct Scope, string Id, DataGoogleNetworkConnectivityHubIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig">DataGoogleNetworkConnectivityHubIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig">DataGoogleNetworkConnectivityHubIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkConnectivityHubIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkConnectivityHubIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkConnectivityHubIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkConnectivityHubIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkConnectivityHubIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleNetworkConnectivityHubIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkConnectivityHubIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkConnectivityHubIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_connectivity_hub_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkConnectivityHubIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hubInput">HubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hub">Hub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `HubInput`<sup>Optional</sup> <a name="HubInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hubInput"></a>

```csharp
public string HubInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Hub`<sup>Required</sup> <a name="Hub" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hub"></a>

```csharp
public string Hub { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkConnectivityHubIamPolicyConfig <a name="DataGoogleNetworkConnectivityHubIamPolicyConfig" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkConnectivityHubIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Hub,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.hub">Hub</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_connectivity_hub_iam_policy#hub DataGoogleNetworkConnectivityHubIamPolicy#hub}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_connectivity_hub_iam_policy#id DataGoogleNetworkConnectivityHubIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_connectivity_hub_iam_policy#project DataGoogleNetworkConnectivityHubIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Hub`<sup>Required</sup> <a name="Hub" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.hub"></a>

```csharp
public string Hub { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_connectivity_hub_iam_policy#hub DataGoogleNetworkConnectivityHubIamPolicy#hub}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_connectivity_hub_iam_policy#id DataGoogleNetworkConnectivityHubIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/network_connectivity_hub_iam_policy#project DataGoogleNetworkConnectivityHubIamPolicy#project}.

---



