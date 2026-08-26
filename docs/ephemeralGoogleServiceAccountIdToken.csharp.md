# `ephemeralGoogleServiceAccountIdToken` Submodule <a name="`ephemeralGoogleServiceAccountIdToken` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountIdToken <a name="EphemeralGoogleServiceAccountIdToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new EphemeralGoogleServiceAccountIdToken(Construct Scope, string Id, EphemeralGoogleServiceAccountIdTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig">EphemeralGoogleServiceAccountIdTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig">EphemeralGoogleServiceAccountIdTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail">ResetIncludeEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount">ResetTargetServiceAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates"></a>

```csharp
private void ResetDelegates()
```

##### `ResetIncludeEmail` <a name="ResetIncludeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```csharp
private void ResetIncludeEmail()
```

##### `ResetTargetServiceAccount` <a name="ResetTargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```csharp
private void ResetTargetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountIdToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountIdToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountIdToken.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken">IdToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput">DelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput">IncludeEmailInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput">TargetAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates">Delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail">IncludeEmail</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience">TargetAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken"></a>

```csharp
public string IdToken { get; }
```

- *Type:* string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput"></a>

```csharp
public string[] DelegatesInput { get; }
```

- *Type:* string[]

---

##### `IncludeEmailInput`<sup>Optional</sup> <a name="IncludeEmailInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```csharp
public bool|IResolvable IncludeEmailInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TargetAudienceInput`<sup>Optional</sup> <a name="TargetAudienceInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```csharp
public string TargetAudienceInput { get; }
```

- *Type:* string

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```csharp
public string TargetServiceAccountInput { get; }
```

- *Type:* string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates"></a>

```csharp
public string[] Delegates { get; }
```

- *Type:* string[]

---

##### `IncludeEmail`<sup>Required</sup> <a name="IncludeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail"></a>

```csharp
public bool|IResolvable IncludeEmail { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TargetAudience`<sup>Required</sup> <a name="TargetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience"></a>

```csharp
public string TargetAudience { get; }
```

- *Type:* string

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountIdTokenConfig <a name="EphemeralGoogleServiceAccountIdTokenConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new EphemeralGoogleServiceAccountIdTokenConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string TargetAudience,
    string[] Delegates = null,
    bool|IResolvable IncludeEmail = null,
    string TargetServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience">TargetAudience</a></code> | <code>string</code> | The audience claim for the `id_token`. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates">Delegates</a></code> | <code>string[]</code> | Delegate chain of approvals needed to perform full impersonation. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail">IncludeEmail</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include the verified email in the claim. Used only when using impersonation mode. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | The email of the service account being impersonated.  Used only when using impersonation mode. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `TargetAudience`<sup>Required</sup> <a name="TargetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```csharp
public string TargetAudience { get; set; }
```

- *Type:* string

The audience claim for the `id_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token#target_audience EphemeralGoogleServiceAccountIdToken#target_audience}

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```csharp
public string[] Delegates { get; set; }
```

- *Type:* string[]

Delegate chain of approvals needed to perform full impersonation.

Specify the fully qualified service account name.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token#delegates EphemeralGoogleServiceAccountIdToken#delegates}

---

##### `IncludeEmail`<sup>Optional</sup> <a name="IncludeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```csharp
public bool|IResolvable IncludeEmail { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include the verified email in the claim. Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token#include_email EphemeralGoogleServiceAccountIdToken#include_email}

---

##### `TargetServiceAccount`<sup>Optional</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; set; }
```

- *Type:* string

The email of the service account being impersonated.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token#target_service_account EphemeralGoogleServiceAccountIdToken#target_service_account}

---



