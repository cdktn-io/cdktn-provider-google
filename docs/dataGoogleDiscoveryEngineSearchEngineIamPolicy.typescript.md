# `dataGoogleDiscoveryEngineSearchEngineIamPolicy` Submodule <a name="`dataGoogleDiscoveryEngineSearchEngineIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDiscoveryEngineSearchEngineIamPolicy <a name="DataGoogleDiscoveryEngineSearchEngineIamPolicy" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy google_discovery_engine_search_engine_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

new dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy(scope: Construct, id: string, config: DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig">DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig">DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDiscoveryEngineSearchEngineIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleDiscoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleDiscoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleDiscoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleDiscoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleDiscoveryEngineSearchEngineIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDiscoveryEngineSearchEngineIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDiscoveryEngineSearchEngineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDiscoveryEngineSearchEngineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig <a name="DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineSearchEngineIamPolicy } from '@cdktn/provider-google'

const dataGoogleDiscoveryEngineSearchEngineIamPolicyConfig: dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.collectionId">collectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#collection_id DataGoogleDiscoveryEngineSearchEngineIamPolicy#collection_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.engineId">engineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#engine_id DataGoogleDiscoveryEngineSearchEngineIamPolicy#engine_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#id DataGoogleDiscoveryEngineSearchEngineIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#location DataGoogleDiscoveryEngineSearchEngineIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#project DataGoogleDiscoveryEngineSearchEngineIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#collection_id DataGoogleDiscoveryEngineSearchEngineIamPolicy#collection_id}.

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#engine_id DataGoogleDiscoveryEngineSearchEngineIamPolicy#engine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#id DataGoogleDiscoveryEngineSearchEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#location DataGoogleDiscoveryEngineSearchEngineIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineSearchEngineIamPolicy.DataGoogleDiscoveryEngineSearchEngineIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/discovery_engine_search_engine_iam_policy#project DataGoogleDiscoveryEngineSearchEngineIamPolicy#project}.

---



