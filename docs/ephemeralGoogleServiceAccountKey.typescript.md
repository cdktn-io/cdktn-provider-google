# `ephemeralGoogleServiceAccountKey` Submodule <a name="`ephemeralGoogleServiceAccountKey` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountKey <a name="EphemeralGoogleServiceAccountKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer"></a>

```typescript
import { ephemeralGoogleServiceAccountKey } from '@cdktn/provider-google'

new ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey(scope: Construct, id: string, config?: EphemeralGoogleServiceAccountKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig">EphemeralGoogleServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig">EphemeralGoogleServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey">resetFetchKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType">resetPrivateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData">resetPublicKeyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType">resetPublicKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId">resetServiceAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFetchKey` <a name="resetFetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey"></a>

```typescript
public resetFetchKey(): void
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetPrivateKeyType` <a name="resetPrivateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType"></a>

```typescript
public resetPrivateKeyType(): void
```

##### `resetPublicKeyData` <a name="resetPublicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData"></a>

```typescript
public resetPublicKeyData(): void
```

##### `resetPublicKeyType` <a name="resetPublicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType"></a>

```typescript
public resetPublicKeyType(): void
```

##### `resetServiceAccountId` <a name="resetServiceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId"></a>

```typescript
public resetServiceAccountId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct"></a>

```typescript
import { ephemeralGoogleServiceAccountKey } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement"></a>

```typescript
import { ephemeralGoogleServiceAccountKey } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralGoogleServiceAccountKey } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput">fetchKeyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput">privateKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput">publicKeyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput">publicKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey">fetchKey</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType">privateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData">publicKeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType">publicKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `fetchKeyInput`<sup>Optional</sup> <a name="fetchKeyInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput"></a>

```typescript
public readonly fetchKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `privateKeyTypeInput`<sup>Optional</sup> <a name="privateKeyTypeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput"></a>

```typescript
public readonly privateKeyTypeInput: string;
```

- *Type:* string

---

##### `publicKeyDataInput`<sup>Optional</sup> <a name="publicKeyDataInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput"></a>

```typescript
public readonly publicKeyDataInput: string;
```

- *Type:* string

---

##### `publicKeyTypeInput`<sup>Optional</sup> <a name="publicKeyTypeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput"></a>

```typescript
public readonly publicKeyTypeInput: string;
```

- *Type:* string

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput"></a>

```typescript
public readonly serviceAccountIdInput: string;
```

- *Type:* string

---

##### `fetchKey`<sup>Required</sup> <a name="fetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey"></a>

```typescript
public readonly fetchKey: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyType`<sup>Required</sup> <a name="privateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType"></a>

```typescript
public readonly privateKeyType: string;
```

- *Type:* string

---

##### `publicKeyData`<sup>Required</sup> <a name="publicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData"></a>

```typescript
public readonly publicKeyData: string;
```

- *Type:* string

---

##### `publicKeyType`<sup>Required</sup> <a name="publicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType"></a>

```typescript
public readonly publicKeyType: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountKeyConfig <a name="EphemeralGoogleServiceAccountKeyConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.Initializer"></a>

```typescript
import { ephemeralGoogleServiceAccountKey } from '@cdktn/provider-google'

const ephemeralGoogleServiceAccountKeyConfig: ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey">fetchKey</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to fetch the public key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | The algorithm used to generate the key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name">name</a></code> | <code>string</code> | The name of the service account key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The private key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType">privateKeyType</a></code> | <code>string</code> | The type of the private key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData">publicKeyData</a></code> | <code>string</code> | The public key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType">publicKeyType</a></code> | <code>string</code> | The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | The ID of the parent service account of the key. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `fetchKey`<sup>Optional</sup> <a name="fetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey"></a>

```typescript
public readonly fetchKey: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to fetch the public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#fetch_key EphemeralGoogleServiceAccountKey#fetch_key}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

The algorithm used to generate the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#key_algorithm EphemeralGoogleServiceAccountKey#key_algorithm}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service account key.

This must have format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{KEYID}`, where `{ACCOUNT}` is the email address or unique id of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#name EphemeralGoogleServiceAccountKey#name}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The private key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#private_key EphemeralGoogleServiceAccountKey#private_key}

---

##### `privateKeyType`<sup>Optional</sup> <a name="privateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType"></a>

```typescript
public readonly privateKeyType: string;
```

- *Type:* string

The type of the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#private_key_type EphemeralGoogleServiceAccountKey#private_key_type}

---

##### `publicKeyData`<sup>Optional</sup> <a name="publicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData"></a>

```typescript
public readonly publicKeyData: string;
```

- *Type:* string

The public key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#public_key_data EphemeralGoogleServiceAccountKey#public_key_data}

---

##### `publicKeyType`<sup>Optional</sup> <a name="publicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType"></a>

```typescript
public readonly publicKeyType: string;
```

- *Type:* string

The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#public_key_type EphemeralGoogleServiceAccountKey#public_key_type}

---

##### `serviceAccountId`<sup>Optional</sup> <a name="serviceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#service_account_id EphemeralGoogleServiceAccountKey#service_account_id}

---



