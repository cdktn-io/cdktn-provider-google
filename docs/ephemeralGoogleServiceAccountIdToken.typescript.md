# `ephemeralGoogleServiceAccountIdToken` Submodule <a name="`ephemeralGoogleServiceAccountIdToken` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountIdToken <a name="EphemeralGoogleServiceAccountIdToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer"></a>

```typescript
import { ephemeralGoogleServiceAccountIdToken } from '@cdktn/provider-google'

new ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken(scope: Construct, id: string, config: EphemeralGoogleServiceAccountIdTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig">EphemeralGoogleServiceAccountIdTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig">EphemeralGoogleServiceAccountIdTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail">resetIncludeEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount">resetTargetServiceAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates"></a>

```typescript
public resetDelegates(): void
```

##### `resetIncludeEmail` <a name="resetIncludeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```typescript
public resetIncludeEmail(): void
```

##### `resetTargetServiceAccount` <a name="resetTargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```typescript
public resetTargetServiceAccount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct"></a>

```typescript
import { ephemeralGoogleServiceAccountIdToken } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement"></a>

```typescript
import { ephemeralGoogleServiceAccountIdToken } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralGoogleServiceAccountIdToken } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken">idToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput">delegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput">includeEmailInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput">targetAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates">delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail">includeEmail</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience">targetAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput"></a>

```typescript
public readonly delegatesInput: string[];
```

- *Type:* string[]

---

##### `includeEmailInput`<sup>Optional</sup> <a name="includeEmailInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```typescript
public readonly includeEmailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `targetAudienceInput`<sup>Optional</sup> <a name="targetAudienceInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```typescript
public readonly targetAudienceInput: string;
```

- *Type:* string

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```typescript
public readonly targetServiceAccountInput: string;
```

- *Type:* string

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

---

##### `includeEmail`<sup>Required</sup> <a name="includeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail"></a>

```typescript
public readonly includeEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `targetAudience`<sup>Required</sup> <a name="targetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience"></a>

```typescript
public readonly targetAudience: string;
```

- *Type:* string

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountIdTokenConfig <a name="EphemeralGoogleServiceAccountIdTokenConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.Initializer"></a>

```typescript
import { ephemeralGoogleServiceAccountIdToken } from '@cdktn/provider-google'

const ephemeralGoogleServiceAccountIdTokenConfig: ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience">targetAudience</a></code> | <code>string</code> | The audience claim for the `id_token`. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates">delegates</a></code> | <code>string[]</code> | Delegate chain of approvals needed to perform full impersonation. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail">includeEmail</a></code> | <code>boolean \| cdktn.IResolvable</code> | Include the verified email in the claim. Used only when using impersonation mode. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | The email of the service account being impersonated.  Used only when using impersonation mode. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `targetAudience`<sup>Required</sup> <a name="targetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```typescript
public readonly targetAudience: string;
```

- *Type:* string

The audience claim for the `id_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token#target_audience EphemeralGoogleServiceAccountIdToken#target_audience}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

Delegate chain of approvals needed to perform full impersonation.

Specify the fully qualified service account name.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token#delegates EphemeralGoogleServiceAccountIdToken#delegates}

---

##### `includeEmail`<sup>Optional</sup> <a name="includeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```typescript
public readonly includeEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Include the verified email in the claim. Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token#include_email EphemeralGoogleServiceAccountIdToken#include_email}

---

##### `targetServiceAccount`<sup>Optional</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

The email of the service account being impersonated.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_id_token#target_service_account EphemeralGoogleServiceAccountIdToken#target_service_account}

---



