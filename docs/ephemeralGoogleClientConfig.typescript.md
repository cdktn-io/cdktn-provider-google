# `ephemeralGoogleClientConfig` Submodule <a name="`ephemeralGoogleClientConfig` Submodule" id="@cdktn/provider-google.ephemeralGoogleClientConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleClientConfig <a name="EphemeralGoogleClientConfig" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/client_config google_client_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.Initializer"></a>

```typescript
import { ephemeralGoogleClientConfig } from '@cdktn/provider-google'

new ephemeralGoogleClientConfig.EphemeralGoogleClientConfig(scope: Construct, id: string, config?: EphemeralGoogleClientConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig">EphemeralGoogleClientConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig">EphemeralGoogleClientConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isConstruct"></a>

```typescript
import { ephemeralGoogleClientConfig } from '@cdktn/provider-google'

ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isTerraformElement"></a>

```typescript
import { ephemeralGoogleClientConfig } from '@cdktn/provider-google'

ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralGoogleClientConfig } from '@cdktn/provider-google'

ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.defaultLabels">defaultLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `defaultLabels`<sup>Required</sup> <a name="defaultLabels" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.defaultLabels"></a>

```typescript
public readonly defaultLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleClientConfigConfig <a name="EphemeralGoogleClientConfigConfig" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.Initializer"></a>

```typescript
import { ephemeralGoogleClientConfig } from '@cdktn/provider-google'

const ephemeralGoogleClientConfigConfig: ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleClientConfig.EphemeralGoogleClientConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---



