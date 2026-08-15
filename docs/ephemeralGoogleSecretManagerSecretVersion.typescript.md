# `ephemeralGoogleSecretManagerSecretVersion` Submodule <a name="`ephemeralGoogleSecretManagerSecretVersion` Submodule" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleSecretManagerSecretVersion <a name="EphemeralGoogleSecretManagerSecretVersion" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version google_secret_manager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer"></a>

```typescript
import { ephemeralGoogleSecretManagerSecretVersion } from '@cdktn/provider-google'

new ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion(scope: Construct, id: string, config: EphemeralGoogleSecretManagerSecretVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig">EphemeralGoogleSecretManagerSecretVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig">EphemeralGoogleSecretManagerSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetIsSecretDataBase64">resetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetIsSecretDataBase64` <a name="resetIsSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetIsSecretDataBase64"></a>

```typescript
public resetIsSecretDataBase64(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct"></a>

```typescript
import { ephemeralGoogleSecretManagerSecretVersion } from '@cdktn/provider-google'

ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement"></a>

```typescript
import { ephemeralGoogleSecretManagerSecretVersion } from '@cdktn/provider-google'

ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralGoogleSecretManagerSecretVersion } from '@cdktn/provider-google'

ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.destroyTime">destroyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretData">secretData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64Input">isSecretDataBase64Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destroyTime`<sup>Required</sup> <a name="destroyTime" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.destroyTime"></a>

```typescript
public readonly destroyTime: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretData`<sup>Required</sup> <a name="secretData" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretData"></a>

```typescript
public readonly secretData: string;
```

- *Type:* string

---

##### `isSecretDataBase64Input`<sup>Optional</sup> <a name="isSecretDataBase64Input" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64Input"></a>

```typescript
public readonly isSecretDataBase64Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `isSecretDataBase64`<sup>Required</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64"></a>

```typescript
public readonly isSecretDataBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleSecretManagerSecretVersionConfig <a name="EphemeralGoogleSecretManagerSecretVersionConfig" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.Initializer"></a>

```typescript
import { ephemeralGoogleSecretManagerSecretVersion } from '@cdktn/provider-google'

const ephemeralGoogleSecretManagerSecretVersionConfig: ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.secret">secret</a></code> | <code>string</code> | The secret to get the secret version for. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the secret data returned will not get base64 decoded. Defaults to false. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.project">project</a></code> | <code>string</code> | The project to get the secret version for. If it is not provided, the provider project is used. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.version">version</a></code> | <code>string</code> | The version of the secret to get. If it is not provided, the latest version is retrieved. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The secret to get the secret version for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#secret EphemeralGoogleSecretManagerSecretVersion#secret}

---

##### `isSecretDataBase64`<sup>Optional</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.isSecretDataBase64"></a>

```typescript
public readonly isSecretDataBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the secret data returned will not get base64 decoded. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#is_secret_data_base64 EphemeralGoogleSecretManagerSecretVersion#is_secret_data_base64}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project to get the secret version for. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#project EphemeralGoogleSecretManagerSecretVersion#project}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the secret to get. If it is not provided, the latest version is retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#version EphemeralGoogleSecretManagerSecretVersion#version}

---



