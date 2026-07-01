# `discoveryEngineSearchEngineIamPolicy` Submodule <a name="`discoveryEngineSearchEngineIamPolicy` Submodule" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineSearchEngineIamPolicy <a name="DiscoveryEngineSearchEngineIamPolicy" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy google_discovery_engine_search_engine_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer"></a>

```typescript
import { discoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

new discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy(scope: Construct, id: string, config: DiscoveryEngineSearchEngineIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig">DiscoveryEngineSearchEngineIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig">DiscoveryEngineSearchEngineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineSearchEngineIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isConstruct"></a>

```typescript
import { discoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformElement"></a>

```typescript
import { discoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformResource"></a>

```typescript
import { discoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport"></a>

```typescript
import { discoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DiscoveryEngineSearchEngineIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineSearchEngineIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineSearchEngineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineSearchEngineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineSearchEngineIamPolicyConfig <a name="DiscoveryEngineSearchEngineIamPolicyConfig" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.Initializer"></a>

```typescript
import { discoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

const discoveryEngineSearchEngineIamPolicyConfig: discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.collectionId">collectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#collection_id DiscoveryEngineSearchEngineIamPolicy#collection_id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.engineId">engineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#engine_id DiscoveryEngineSearchEngineIamPolicy#engine_id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#policy_data DiscoveryEngineSearchEngineIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#id DiscoveryEngineSearchEngineIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#location DiscoveryEngineSearchEngineIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#project DiscoveryEngineSearchEngineIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#collection_id DiscoveryEngineSearchEngineIamPolicy#collection_id}.

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#engine_id DiscoveryEngineSearchEngineIamPolicy#engine_id}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#policy_data DiscoveryEngineSearchEngineIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#id DiscoveryEngineSearchEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#location DiscoveryEngineSearchEngineIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineSearchEngineIamPolicy.DiscoveryEngineSearchEngineIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_search_engine_iam_policy#project DiscoveryEngineSearchEngineIamPolicy#project}.

---



