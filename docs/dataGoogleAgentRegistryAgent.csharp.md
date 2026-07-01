# `dataGoogleAgentRegistryAgent` Submodule <a name="`dataGoogleAgentRegistryAgent` Submodule" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAgentRegistryAgent <a name="DataGoogleAgentRegistryAgent" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent google_agent_registry_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgent(Construct Scope, string Id, DataGoogleAgentRegistryAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig">DataGoogleAgentRegistryAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig">DataGoogleAgentRegistryAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAgentId` <a name="ResetAgentId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetAgentId"></a>

```csharp
private void ResetAgentId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAgentRegistryAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAgentRegistryAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAgentRegistryAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAgentRegistryAgent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleAgentRegistryAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleAgentRegistryAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAgentRegistryAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAgentRegistryAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAgentRegistryAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.protocols">Protocols</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList">DataGoogleAgentRegistryAgentProtocolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.skills">Skills</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList">DataGoogleAgentRegistryAgentSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.urn">Urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.protocols"></a>

```csharp
public DataGoogleAgentRegistryAgentProtocolsList Protocols { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList">DataGoogleAgentRegistryAgentProtocolsList</a>

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.skills"></a>

```csharp
public DataGoogleAgentRegistryAgentSkillsList Skills { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList">DataGoogleAgentRegistryAgentSkillsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.urn"></a>

```csharp
public string Urn { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAgentRegistryAgentConfig <a name="DataGoogleAgentRegistryAgentConfig" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string AgentId = null,
    string Filter = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.agentId">AgentId</a></code> | <code>string</code> | The unique identifier for the Agent. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.filter">Filter</a></code> | <code>string</code> | A filter string that identifies a unique Agent. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent#id DataGoogleAgentRegistryAgent#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent#project DataGoogleAgentRegistryAgent#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent#location DataGoogleAgentRegistryAgent#location}

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

The unique identifier for the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent#agent_id DataGoogleAgentRegistryAgent#agent_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter string that identifies a unique Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent#filter DataGoogleAgentRegistryAgent#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent#id DataGoogleAgentRegistryAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/agent_registry_agent#project DataGoogleAgentRegistryAgent#project}.

---

### DataGoogleAgentRegistryAgentProtocols <a name="DataGoogleAgentRegistryAgentProtocols" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentProtocols {

};
```


### DataGoogleAgentRegistryAgentProtocolsInterfaces <a name="DataGoogleAgentRegistryAgentProtocolsInterfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentProtocolsInterfaces {

};
```


### DataGoogleAgentRegistryAgentSkills <a name="DataGoogleAgentRegistryAgentSkills" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentSkills {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAgentRegistryAgentProtocolsInterfacesList <a name="DataGoogleAgentRegistryAgentProtocolsInterfacesList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentProtocolsInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get"></a>

```csharp
private DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference <a name="DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.protocolBinding">ProtocolBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces">DataGoogleAgentRegistryAgentProtocolsInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.protocolBinding"></a>

```csharp
public string ProtocolBinding { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAgentRegistryAgentProtocolsInterfaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces">DataGoogleAgentRegistryAgentProtocolsInterfaces</a>

---


### DataGoogleAgentRegistryAgentProtocolsList <a name="DataGoogleAgentRegistryAgentProtocolsList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentProtocolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get"></a>

```csharp
private DataGoogleAgentRegistryAgentProtocolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAgentRegistryAgentProtocolsOutputReference <a name="DataGoogleAgentRegistryAgentProtocolsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentProtocolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.interfaces">Interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList">DataGoogleAgentRegistryAgentProtocolsInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols">DataGoogleAgentRegistryAgentProtocols</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interfaces`<sup>Required</sup> <a name="Interfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.interfaces"></a>

```csharp
public DataGoogleAgentRegistryAgentProtocolsInterfacesList Interfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList">DataGoogleAgentRegistryAgentProtocolsInterfacesList</a>

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAgentRegistryAgentProtocols InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols">DataGoogleAgentRegistryAgentProtocols</a>

---


### DataGoogleAgentRegistryAgentSkillsList <a name="DataGoogleAgentRegistryAgentSkillsList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentSkillsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get"></a>

```csharp
private DataGoogleAgentRegistryAgentSkillsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAgentRegistryAgentSkillsOutputReference <a name="DataGoogleAgentRegistryAgentSkillsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleAgentRegistryAgentSkillsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.examples">Examples</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills">DataGoogleAgentRegistryAgentSkills</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Examples`<sup>Required</sup> <a name="Examples" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.examples"></a>

```csharp
public string[] Examples { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAgentRegistryAgentSkills InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills">DataGoogleAgentRegistryAgentSkills</a>

---



